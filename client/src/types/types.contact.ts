export interface ContactFormFields {
  Nombre: string;
  Company?: string;
  Email: string;
  Message: string;
}

export interface ContactPayload {
  data: ContactFormFields;
}

export interface StrapiErrorDetail {
  Message?: string;
  path?: string;
  name?: string;
  [key: string]: any;
}

export interface StrapiErrorResponse {
  error?: {
    status?: number;
    Name?: string;
    Message?: string;
    details?: Record<string, any> | StrapiErrorDetail[];
  };
}

export interface UseContactFormReturn {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isSubmitting: boolean;
  showModal: boolean;
  setShowModal: (open: boolean) => void;
  error: string | null;
  status: string | null;
}
