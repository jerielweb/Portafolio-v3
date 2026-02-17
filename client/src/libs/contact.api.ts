import { useState } from "react";
import type React from "react";
import type { ContactPayload, UseContactFormReturn } from "@/types/types.contact";

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export function useContactForm(): UseContactFormReturn {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setStatus(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data: ContactPayload = {
            data: {
                Nombre: formData.get("name")?.toString() || "",
                Company: formData.get("company")?.toString() || "",
                Email: formData.get("email")?.toString() || "",
                Message: formData.get("message")?.toString() || ""
            }
        };

        try {
            const response = await fetch(`${STRAPI_URL}/api/contact-messajes`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            const text = await response.text();
            let body: any = null;
            try { body = text ? JSON.parse(text) : null; } catch { body = text; }

            if (response.ok) {
                setStatus("Se ha enviado con éxito");
                setShowModal(true);
                form.reset();
            } else {
                const msg = body?.error?.message || body?.message || JSON.stringify(body) || `Error ${response.status}`;
                setError(msg);
                setStatus(`Error: ${msg}`);
                setShowModal(true);
            }
        } catch (err) {
            const msg = String(err);
            setError(msg);
            setStatus("Error de conexión con el servidor");
            setShowModal(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return { handleSubmit, isSubmitting, showModal, setShowModal, error, status };
}