import SectionForm from '../SectionForm/SectionForm'
import SectionText from '../SectionText/SectionText'
import './App.css'

const App = ()=>{
  return (
    <div>
      <SectionText
        title = {'Learn to code by watching others'}
        text = {'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.'}
      />
      
      <SectionForm
        popup={'Try it free 7 days then $20/mo. thereater'}
        textInput1={'First Name'}
        textInput2={'Last Name'}
        textInput3={'Email Adress'}
        textInput4={'Password'}
        textButton={'CLAIM YOUR FREE TRIAL'}
        warning={'By clicking the button you are agreeing to our Terms and Services'}
      />

    </div>
  )
}
export default App