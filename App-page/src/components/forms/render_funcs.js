import React from 'react'
import { Editor } from '@tinymce/tinymce-react';

export function renderField(field) {
    const { touched, error, pristine } = field.meta
    return (
        <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
            {
                field.label ? <label htmlFor={field.inputId} className="font-weight-bold">{field.label} {field.required ? <font color="red">*</font> : ''}</label> : ''
            }
            <input
                className="form-control"
                id={field.inputId}
                type={field.type}
                disabled={field.disabled}
                placeholder={field.placeholder}
                autoFocus={field.autoFocus}
                {...field.input}
            />
            <div className="text-help text-danger">
                {touched ? error : ''}
            </div>
        </div>
    )
}
export function renderEditor(field) {
    const { touched, error, pristine } = field.meta
    return (
        <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
            {
                field.label ? <label htmlFor={field.inputId} className="font-weight-bold">{field.label} {field.required ? <font color="red">*</font> : ''}</label> : ''
            }
            <Editor init={{branding: false, plugins: 'lists'}} value={field.input.value} onEditorChange={field.input.onChange}  />
        </div>
    )
}

export function renderTextArea(field) {
    const { touched, error, pristine } = field.meta
    return (
        <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
            {
                field.label ? <label htmlFor={field.inputId} className="font-weight-bold">{field.label} {field.required ? <font color="red">*</font> : ''}</label> : ''
            }
            <textarea
                className="form-control"
                id={field.inputId}
                type={field.type}
                placeholder={field.placeholder}
                disabled={field.disabled}
                rows={field.rows}
                {...field.input}></textarea>
            <div className="text-help text-danger">
                {touched ? error : ''}
            </div>
        </div>
    )
}
export function renderCheckBox(field) {
    const { touched, error, pristine } = field.meta
    return (
        <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
            <div className="col-sm-10">
                <div className="form-check">
                    <input
                        {...field.input}
                        className="form-check-input"
                        id={field.inputId}
                        disabled={field.disabled}
                        type="checkbox"
                    />
                    <label className="form-check-label" htmlFor={field.inputId}>{field.label}</label>
                </div>
            </div>
            <div className="text-help text-danger">
                {touched ? error : ''}
            </div>
        </div>
    )
}
