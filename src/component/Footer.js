import React from 'react'

function Footer() {
  return (
    <div>

        
        <div className='footer'>
            <hr/>
            <div className='ftr'>
               
                <div className='f1'>
                    <div className='circle'>
                        <img className='crl' src='img/Group 208.png' alt='loading'></img>
                    </div>

                    <div>
                        <br/><br/><br/><br/>
                        <b className='wrld'>Wordlens</b>
                    </div>

                    <div className='diamond'>
                        <br/>
                        <img className='dmd' src='img/Group 207.png' alt='loading'></img>
                    </div>
                </div>

                <div className='f2'>
                    <span className='api'>The API used to serve this data was provided by<br/> dictionaryapi.dev, click on the link below to read more</span>
                </div>
                <div className='f3'>
                    <div className='spiral'>
                        <img className='spl' src='img/Group 91.png' alt='loading'></img>
                    </div>

                    <div>
                        <br/><br/>
                        <button className='button'>Visit API documentation</button>  
                    </div>

                    <div className='circle2'>
                        <img className='crl2' src='img/Group 209.png' alt='loading'></img>
                    </div>

                </div>

            </div>

            <div className='ftr2'>

                <div className='one'>
                    <b className='wd'>Wordlens</b>
                </div>

                <div className='two'>

                    <div className='img'>
                        <img className='gsm' alt='loading' src='img/fb.png'/>
                        <img className='gsm' alt='loading' src='img/insta.png'/>
                        <img className='gsm' alt='loading' src='img/twitter.png'/>
                        <img className='gsm' alt='loading' src='img/lnkd.png'/>
                    </div>

                    <div className='cpy'>
                        <span className='trm'>Copyright © 2022 Wordlens. All rights reserved.</span>
                    </div>
                </div>

                <div className='three'>

                    <span className='trm a'>Terms of use.</span>
                    <span className='trm '>Privacy Policy</span>


                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer