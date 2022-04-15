/** 投稿 */
export type Post = {
  /** ユーザーID  */
  // userId: string
  id: number;
  title: string;
  createdAt: string;
};

export type Posts = Array<Post>;
