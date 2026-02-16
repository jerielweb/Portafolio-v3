export interface Footer {
  id: number;
  documentId: string;
  Facebook: string;
  Linkdedin: string;
  SiteMap: null | string;
  PageName: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


export interface FooterMeta {
  [key: string]: unknown;
}


export interface FooterResponse {
  data: Footer;
  meta: FooterMeta;
}
