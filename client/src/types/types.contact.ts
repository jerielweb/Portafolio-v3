export interface ContactFormFields {
  name: string;
  company?: string;
  email: string;
  message: string;
}

export interface ContactPayload {
  data: ContactFormFields;
}

export interface StrapiErrorDetail {
  message?: string;
  path?: string;
  name?: string;
  [key: string]: any;
}

export interface StrapiErrorResponse {
  error?: {
    status?: number;
    name?: string;
    message?: string;
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
