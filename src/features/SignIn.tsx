import CustomButton from '../components/CustomButton'
import FeaturesList from '../components/featuresList'
import { H1, Input, InputError, InputWrapper, Label, Para, SignInContainer, SignInContent, SignInImage } from '../components/styledComponents'
import { signInData } from '../data'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  email?: string;
};
const SignIn = ({ setSubmited }: { setSubmited: (value: boolean) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    setSubmited(true)
  }

  return (
    <SignInContainer>
      <SignInContent onSubmit={handleSubmit(onSubmit)}>
        <H1>{signInData.title}</H1>
        <Para>{signInData.desc}</Para>
        <FeaturesList features={signInData.features} />
        <InputWrapper>
          <Label >
            {signInData.inputs[0].label}
            {errors.email ? <InputError>Email is required</InputError> : null}
          </Label>
          <Input
            {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })}
            placeholder={signInData.inputs[0].placeholder}
            error={!!errors.email}
          />
        </InputWrapper>
        <CustomButton title={signInData.submitButton} onClick={() => null} />
      </SignInContent>
      <SignInImage
        srcSet="./src/assets/images/illustration-sign-up-mobile.svg 375w, ./src/assets/images/illustration-sign-up-desktop.svg 1440w"
        sizes="(max-width: 375px) 375w,1440w" // Adjust this according to your design
        src="./src/assets/images/illustration-sign-up-desktop.svg"
        alt="Sign In Illustration"
      /></SignInContainer>
  )
}

export default SignIn