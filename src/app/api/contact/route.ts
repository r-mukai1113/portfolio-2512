import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ResendのAPIキーを環境変数から取得（ビルド時はダミー値）
const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // バリデーション
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "すべての項目を入力してください" },
        { status: 400 }
      );
    }

    // メール送信
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Resendの検証済みドメイン
      to: [process.env.CONTACT_EMAIL_TO || "your-email@example.com"],
      subject: `【お問い合わせ】${subject}`,
      html: `
        <h2>ポートフォリオサイトからお問い合わせがありました</h2>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subject}</p>
        <h3>お問い合わせ内容:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
      message: "お問い合わせを受け付けました",
      data,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "送信中にエラーが発生しました",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
