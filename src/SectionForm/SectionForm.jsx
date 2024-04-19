import Button from '../Components/Button/Button'
import Input from '../Components/Input/Input'
import './SectionForm.css'

const SectionForm = ({ popup, textButton, textInput1, textInput2, textInput3, textInput4, warning}) => {
  return (
    <section className='sectionForm'>
      <div className='popup'>{popup}</div>
      <div className='form'>
        <Input textInput={textInput1} />
        <Input textInput={textInput2} />
        <Input textInput={textInput3} />
        <Input textInput={textInput4} />
        <Button textButton={textButton} />
        <p className='warning'>{warning}</p>
      </div>
    </section>
  )
}
export default SectionForm