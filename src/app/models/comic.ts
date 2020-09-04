export class Comic {
    id?: string;
    digitalId?: string;
    title?: string;
    issueNumber?: string;
    variantDescription?: string;
    description?: string;
    modified?: string;
    isbn?: string;
    upc?: string;
    diamondCode?: string;
    ean?: string;
    issn?: string;
    format?: string;
    pageCount?: string;
    textObjects?: string;
    resourceURI?: string;
    urls?: string;
    series?: string;
    variants?: string;
    collections?: string;
    collectedIssues?: string;
    dates?: {
      path?: string,
      extension?: string,
    };
    prices?: string;
    images?: string;
    thumbnail?: {
      path?: string,
      extension?: string,
    };
    creators?: string;
    characters?: string;
    stories?: string;
    events?: string;
    likes?: number;
  }
