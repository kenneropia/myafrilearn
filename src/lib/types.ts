export interface Group {
    _id: string;
    name: string;
    __v: number;
};

export type TermEnum = "First Term" | "Second Term" | "Third Term"

type ClassId = {
    _id: string;
    name: string;
    groupId: string;
    alias: string;
    __v: number;
};

type SubjectId = {
    _id: string;
    name: string;
    groupId: string;
    defaultImage: string;
    activeImage: string;
    introText: string;
    classification: string;
    __v: number;
};

type TermId = {
    _id: string;
    name: string;
    __v: number;
};

export type ClassNote = {
    _id: string;
    classId: ClassId;
    subjectId: SubjectId;
    termId: TermId;
    title: string;
    content: string;
    flag: boolean;
    likes: number;
    views: number;
    videoUrls: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
};


