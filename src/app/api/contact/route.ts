import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ResendのAPIキーを環境変数から取得（ビルド時はダミー値）
const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, type, message } = body;

    // バリデーション
    if (!name || !email || !type || !message) {
      return NextResponse.json(
        { error: "必須項目を入力してください" },
        { status: 400 }
      );
    }

    // お問い合わせ種別の日本語化
    const typeLabels: { [key: string]: string } = {
      production: "Web制作のご依頼",
      consulting: "ご相談・お見積り",
      other: "その他",
    };

    // メール送信
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Resendの検証済みドメイン
      to: [process.env.CONTACT_EMAIL_TO || "your-email@example.com"],
      subject: `【${typeLabels[type] || type}】${name}様からのお問い合わせ`,
      html: `
        <h2>ポートフォリオサイトからお問い合わせがありました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        ${company ? `<p><strong>企業名・屋号:</strong> ${company}</p>` : ""}
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>お問い合わせ種別:</strong> ${typeLabels[type] || type}</p>
        <h3>相談したい内容:</h3>
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
