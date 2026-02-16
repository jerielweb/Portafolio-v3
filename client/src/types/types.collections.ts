export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null | string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface ImageFormats {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
}

export interface CollectionImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Collection {
  id: number;
  documentId: string;
  site_name: string;
  site_url: string;
  categorry: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  shot: CollectionImage;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ResponseMeta {
  pagination: Pagination;
}

export interface CollectionsResponse {
  data: Collection[];
  meta: ResponseMeta;
}
