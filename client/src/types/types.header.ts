export interface DownloadFile {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: Record<string, any> | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface HeaderData {
  id: number;
  documentId: string;
  HomeLink: string;
  CollectionPage: string;
  ProjectPage: string;
  HomeLinkName: string;
  DownloadName: string;
  CollectionName: string;
  ProjectPageName: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Download: DownloadFile;
  className?: string;
}

export interface HeaderApiResponse {
  data: HeaderData;
  meta: any;
}
