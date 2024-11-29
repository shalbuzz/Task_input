
import  {useState} from "react"
import './styles.css';
const Registration = ()=>{

    const [formData, setFormData] = useState({
        fio: "",
        passport: "",
        sex: "",
        yas: "",
        email: "",
        phone: "",
        sympthoms: "",
        comeagain: false,
      });
    const [container,setContainer] = useState(false);
    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
  
      const onSubmit=(event)=>{
          event.preventDefault();
          console.log("Xəstə qeydiyyatı:", formData)
          setContainer(true);
      }
 
      const resetForm = () => {
        setFormData({
          fio: "",
          passport: "",
          sex: "Kisi",
          yas: "",
          email: "",
          phone: "",
          sympthoms: "",
          comeagain: false,
        });
        setContainer(false);
      };
    
    return(
        <div className="container">
         {!container?(<form className="card" id='registrationForm' onSubmit={onSubmit}>
            <label htmlFor="fio">Pasiyentin SAA:</label>
            <input name="fio" type='text' onChange={onChange} required value={formData.fio}/>

            <label htmlFor="passport">Pasportun seriyası və nömrəsi:</label>
            <input name="passport"  type="text" required onChange={onChange} value={formData.passport}/>

            <label htmlFor="sex">Cins:</label>
            <select name="sex" onChange={onChange} value={formData.sex}>
                <option value={'Kisi'} >Kisi</option>
                <option value={'Qadin'} >Qadin</option>
            </select>

            <label htmlFor="yas">Yas:</label>
            <input type="text" name="yas" required onChange={onChange} value={formData.yas}/>

            <label htmlFor="email">Email:</label>
            <input type="text" required onChange={onChange} name="email" value={formData.email}/>

            <label htmlFor="phone">Telefon Nomresi:</label>
            <input type="text" required onChange={onChange} name="phone" value={formData.phone}/>

            <label htmlFor="sympthoms">Simptomlarin təsviri:</label>
            <textarea name="sympthoms" rows={'12'} onChange={onChange} value={formData.sympthoms}></textarea>

            <p>
                <label htmlFor="comeagain">Təkrar qəbul</label>
                <input name="comeagain" required type="checkbox" onChange={onChange} checked={formData.comeagain}/>
            </p>

            <button type="submit">Gonder</button>
         </form>)
          :( <div className="card">
          <h2>Məlumatlar:</h2>
          <p>
            <strong>Pasiyentin SAA:</strong> {formData.fio}
          </p>
          <p>
            <strong>Pasportun seriyası və nömrəsi:</strong> {formData.passport}
          </p>
          <p>
            <strong>Cins:</strong> {formData.sex}
          </p>
          <p>
            <strong>Yaş:</strong> {formData.yas}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Telefon nömrəsi:</strong> {formData.phone}
          </p>
          <p>
            <strong>Simptomlar:</strong> {formData.sympthoms}
          </p>
          <p>
            <strong>Təkrar qəbul:</strong>{formData.comeagain}
            {formData.comeagain ? "Bəli" : "Xeyr"}
          </p>
          <button className="btn-reset"  onClick={resetForm}>Yeni Qeydiyyat</button>
        </div>
      )}
         
         </div>
    )
}
export default Registration