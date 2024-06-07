import React from 'react'
import Header from '../Header/Header'
import animals from '../Images/animals.png'


const AboutUs = () => {
  return (<>
  <Header/>
<section class="py-3 py-md-5">
  <div class="container">
    <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div class="col-12 col-lg-6 col-xl-5">
        <img class="img-fluid rounded" loading="lazy" src={animals} alt="About 1"/>
      </div>
      <div class="col-12 col-lg-6 col-xl-7">
        <div class="row justify-content-xl-center">
          <div class="col-12 col-xl-11">
            <h2 class="mb-3">Kush jemi ne?</h2>
            <p class="lead fs-4 text-secondary mb-3">Mire se vini ne faqen tone! Ne jemi një ekip i pasionuar për kafshet dhe misioni yne eshte te ofrojme informacion te rendesishem, kuriozitete dhe shume informacione te tjera rreth miqve tane 4putrosh</p>
            <div class="row gy-4 gy-md-0 gx-xxl-5X">
              <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div>
                    <h2 class="h4 mb-3">Misioni Yne</h2>
                    <p class="text-secondary mb-0">Ne besojme ne pergjegjesine ndaj mireqenies se kafsheve dhe ne fuqine e edukimit per nje bashkejetese te qendrueshme me to. Per kete arsye, kemi perkushtuar kohe dhe burime per te sjelle informacion te sakte dhe te qendrueshem per kafshet dhe per menyrat se si mund te ndihmojme per te mbrojtur dhe respektuar boten e tyre.</p>
                  </div>
                </div>
              </div>
        
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
</>
  )
}

export default AboutUs