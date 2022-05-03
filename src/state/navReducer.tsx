import React from 'react';
import {v1} from "uuid";
import {Dispatch} from "redux";
import {TodolistType} from "./todolists-reducer";


export type NavReducerStateType = {
    id: string
    title: string
}

export const initialState: NavReducerStateType[] = [
    {id: v1(), title: 'Studies'},
    {id: v1(), title: 'Job'},
    {id: v1(), title: 'Home'},
]

export const navReducer = (state: NavReducerStateType[] = initialState, action: NavReducerActionType): NavReducerStateType[] => {
    switch (action.type) {
        case 'ADD_SECTION':
            let newSection: NavReducerStateType = {
                id: action.id,
                title: action.title
            }
            return [
                ...state,
                newSection
            ]
        case 'REMOVE_SECTION':
            return state.filter(s => s.id !== action.id)
        case 'CHANGE_SECTION':
            return state.map(s => s.id === action.id ? {...s, title: action.title} : s)
        default:
            return state
    }
};

export type NavReducerActionType = AddSectionType | RemoveSectionType | ChangeSectionType

export type AddSectionType = ReturnType<typeof addSection>
export const addSection = (title: string) => {
    return {
        type: 'ADD_SECTION',
        id: v1(),
        title
    }as const
}

export type RemoveSectionType = ReturnType<typeof removeSection>
export const removeSection = (id: string) => {
    return {
        type: 'REMOVE_SECTION',
        id
    }as const
}

export type ChangeSectionType = ReturnType<typeof changeSection>
export const changeSection = (id: string, title: string) => {
    return {
        type: 'CHANGE_SECTION',
        id,
        title
    }as const
}


export const addSectionTC = (title: string) => (dispatch: Dispatch) => {
    dispatch(addSection(title))
}
export const removeSectionTC = (id: string) => (dispatch: Dispatch) => {
    dispatch(removeSection(id))
}
export const changeSectionTC = (id: string, title: string) => (dispatch: Dispatch) => {
    dispatch(changeSection(id, title))
}