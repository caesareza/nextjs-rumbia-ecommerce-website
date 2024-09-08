import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    name: string
    password: string
}

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // eslint-disable-next-line no-console
        console.log(data)
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
                {...register('name', { required: true })}
                className="border p-2"
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
                {...register('password', { required: true })}
                className="border p-2"
            />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}

            <button>Submit</button>
        </form>
    )
}
