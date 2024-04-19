import './SectionText.css'
const SectionText = ({title, text}) => {
  return (
    <section className='sectionText'>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  )
}
export default SectionText