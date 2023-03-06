import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { sendPost } from 'redux/actions/posts'
import { addPost } from 'redux/reducers/postsSlice'
import styles from './AddPost.module.css'


function AddPost() {
    const dispatch = useDispatch()

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        mode:'onBlur'
    })

    const onSubmit = (data) => {
        console.log(data)
        const newPost = {
            userId: 1,
            title: data.Name,
            body: data.Text,
        }
        const newPostJSON =JSON.stringify(newPost)
        console.log(newPost)
        console.log(newPostJSON)
        dispatch(addPost(newPost))
        dispatch(sendPost(newPostJSON))
        reset()
    }

    return (
        <div className={styles.form}>
            <h1 className={styles.header}>Add Post</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.label} htmlFor='name-input'>
                    Name:
                    <input id='name-input' className={styles.nameInput}
                        {...register('Name', {
                            required: 'Required field',
                            pattern: {
                                value:/\s/,
                                message: 'At least two words are required'
                            },
                            minLength: {
                                value: 5,
                                message: 'Minimal length is 5 characters',
                            },
                            maxLength:{
                                value: 30,
                                message: 'Maximum length is 30 characters'
                            }
                        })}
                    />
                </label>
                <div className={styles.error}>
                    {errors?.Name && <p>{errors.Name.message||'Error!'}</p> }
                </div>
                <label className={styles.label} htmlFor='text-input'>
                    Text:
                    <textarea id='text-input' className={styles.textArea} 
                        {...register("Text", 
                            {required: 'Required field', 
                            pattern: {
                                value:/\s/,
                                message: 'At least two words are required'
                            },
                            minLength: {
                                value: 10,
                                message: 'Minimal length is 10 characters',
                            },
                            maxLength:{
                                value: 200,
                                message: 'Maximum length is 200 characters'
                            }})} />
                </label>
                <div className={styles.error}>
                    {errors?.Text && <p>{errors.Text.message||'Error!'}</p> }
                </div>
                <input className={styles.submitInput} type="submit" />
            </form>
        </div>
    )
}

export default AddPost