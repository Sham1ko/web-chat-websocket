
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface IQuery {
    getAllUsers(): User[] | Promise<User[]>;
    getUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createUser(name: string, email: string): User | Promise<User>;
}

type Nullable<T> = T | null;
