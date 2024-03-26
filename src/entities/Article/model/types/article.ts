import { User } from 'entities/User';

export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export enum ArticleView {
    SMALL = 'SMALL',
    BIG = 'BIG',
}

interface AtricleBaseBlock {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleTextBlock extends AtricleBaseBlock {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleImageBlock extends AtricleBaseBlock {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleCodeBlock extends AtricleBaseBlock {
    type: ArticleBlockType.CODE;
    code: string;
}

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    MEDICINE = 'MEDICINE'
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    user: User;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
