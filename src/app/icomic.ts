
export interface IDisplayComic extends IComic {
  show?: boolean;
  isSaving?: boolean;
}

export interface IComic {
  id: number;
  title: string;
  description: {
    p: {
      img: {
        src: string,
        alt: string,
        title: string
      }
    }
  },
  pubDate: Date,
  link: string,
  gui: {
    isPermaLink: boolean,
    text: string
  }
}
