"use server";

function validateEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

type FormResponse = {
    success: boolean;
    message?: string;
    error?: string;
};

export async function submitContactForm(
    data: ContactFormData
): Promise<FormResponse> {
    // バリデーション
    if (!data.name || data.name.trim() === "") {
        return { success: false, error: "お名前を入力してください" };
    }

    if (!data.email || data.email.trim() === "") {
        return { success: false, error: "メールアドレスを入力してください" };
    }

    if (!validateEmail(data.email)) {
        return {
            success: false,
            error: "有効なメールアドレスを入力してください",
        };
    }

    if (!data.message || data.message.trim() === "") {
        return { success: false, error: "メッセージを入力してください" };
    }

    try {
        // サーバーサイドでのfetchには絶対URLが必要
        const baseUrl =
            process.env.NEXT_PUBLIC_BASE_URL;
        const response = await fetch(`${baseUrl}/api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
                errorData.error || "メッセージの送信に失敗しました"
            );
        }

        return { success: true, message: "メッセージが送信されました" };
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return {
            success: false,
            error:
                error instanceof Error
                    ? error.message
                    : "メッセージの送信に失敗しました",
        };
    }
}
