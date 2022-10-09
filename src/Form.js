export default function Form() {
    return(<>
        <div className="box">
            <div className='form'>
                <div className="content">
                    <h2>Sign In</h2>
                    <div className='inputBox'>
                        <input type={'text'} required={true} />
                        <span children={'Username'} />
                        <i />
                    </div>
                    <div className='inputBox'>
                        <input type={'password'} required={true} />
                        <span children={'Password'} />
                        <i />
                    </div>
                    <div className="links">
                        <a href={'#'} children={'Forgot Password'} />
                        <a href={'#'} children={'Sign Up'} />
                    </div>
                    <button className="submit" onClick={(e) => {alert('working')}} children={'Login'} />
                </div>
            </div>
        </div>
    </>)
}