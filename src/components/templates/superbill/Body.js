import React from 'react';

export default () => (
  <div id="body">
    <Cols />
  </div>
);

class Cols extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      services: [],
      service_style: {
        border: "1px solid black"
      },
      diagnosis: []
    }
    this.onClickService = this.onClickService.bind(this);
    this.onClickDiagnosis = this.onClickDiagnosis.bind(this);
  }
  onClickDiagnosis(e){
    const diagnosis_code = e.target.id;
    const index = this.state.diagnosis.indexOf(diagnosis_code);
    if(index != -1){
      this.setState((prevState)=>({
        diagnosis: prevState.diagnosis.filter((value,i)=>i !== index)
      }));
    }    
    else{
      this.setState((prevState)=>({
        diagnosis: [...prevState.diagnosis, diagnosis_code]
      }));
    }
  }
  onClickService(e){
    const service_code = e.target.id;
    const index = this.state.services.indexOf(service_code);
    if(index != -1){
      this.setState((prevState)=>({
        services: prevState.services.filter((value, i)=> i !== index)
      }));
    }
    else{
      this.setState((prevState)=>({
        services: [...prevState.services, service_code]
      }));
    }
  }
  render(){
    return (
      <div id="body_cols">
        <div id="body_col1">
        <table>
          <thead></thead>
          <tbody>
            <tr className="category_tr">
              <td>SERVICE</td>
              <td>CODE</td>
            </tr>
            <tr className="category_tr">
              <td>OFFICE VISITS</td>
              <td></td>
            </tr>
            <tr>
              <td>New Comp Exam Extended</td>
              <td className="service_and_icd_tr" style={this.state.services.indexOf("99205") != -1 ? this.state.service_style : undefined } onClick={this.onClickService} id="99205">99205</td>
            </tr>
            <tr >
              <td>New Comp Exam</td>
              <td className="service_and_icd_tr" style={this.state.services.indexOf("99204") != -1 ? this.state.service_style : undefined } onClick={this.onClickService} id="99204">99204</td>
            </tr>
            <tr >
              <td>New Comp Exam w/o RFX</td>
              <td className="service_and_icd_tr" style={this.state.services.indexOf("92004") != -1 ? this.state.service_style : undefined } onClick={this.onClickService} id="92004">
                92004
              </td>
            </tr>
            <tr >
              <td>New Interm Exam</td>
              <td className="service_and_icd_tr" style={this.state.services.indexOf("99203") != -1 ? this.state.service_style : undefined } onClick={this.onClickService} id="99203">
                99203
              </td>
            </tr>
            <tr >
              <td>New Interm Exam w/o RFX</td>
              <td className="service_and_icd_tr" style={this.state.services.indexOf("92002") != -1 ? this.state.service_style : undefined } onClick={this.onClickService} id="92002">
                92002
              </td>
            </tr>
            <tr >
              <td>Est Comp Exaxm</td>
              <td className="service_and_icd_tr" style={this.state.services.indexOf("99215") != -1 ? this.state.service_style : undefined } onClick={this.onClickService} id="99215">
                99215
              </td>
            </tr>
            <tr >
              <td>Est CompExam w/o RFX</td>
              <td className="service_and_icd_tr" style={this.state.services.indexOf("92014") != -1 ? this.state.service_style : undefined } onClick={this.onClickService} id="92014">
                92014
              </td>
            </tr>
            <tr >
              <td>Est Detailed Exam</td>
              <td className="service_and_icd_tr" style={this.state.services.indexOf("99214") != -1 ? this.state.service_style : undefined } onClick={this.onClickService} id="99214">
                99214
              </td>
            </tr>
            <tr >
              <td>Est Interm Exam w/o RFX</td>
              <td className="service_and_icd_tr" style={this.state.services.indexOf("92012") != -1 ? this.state.service_style : undefined } onClick={this.onClickService} id="92012">
                92012
              </td>
            </tr>
            <tr >
              <td>Est Limited Exam</td>
              <td className="service_and_icd_tr" style={this.state.services.indexOf("99213") != -1 ? this.state.service_style : undefined } onClick={this.onClickService} id="99213">
                99213
              </td>
            </tr>
            <tr >
              <td>Est Brief Exam</td>
              <td className="service_and_icd_tr" style={this.state.services.indexOf("99212") != -1 ? this.state.service_style : undefined } onClick={this.onClickService} id="99212">
                99212
              </td>
            </tr>
            <tr >
              <td>Extended Ophthalmoscopy</td>
              <td className="service_and_icd_tr" style={this.state.services.indexOf("92225") != -1 ? this.state.service_style : undefined } onClick={this.onClickService} id="92225">
                92225
              </td>
            </tr>
            <tr>
              <td>Subseq. Ophthalmoscopy</td>
              <td className="service_and_icd_tr" style={this.state.services.indexOf("92226") != -1 ? this.state.service_style : undefined } onClick={this.onClickService} id="92226">
                92226
              </td>
            </tr>
            <tr className="category_tr">
              <td>CONSULTATIONS</td>
              <td></td>
            </tr>
            <tr>
              <td>Initial Hospital H&P</td>
              <td id="99221" style={this.state.services.indexOf("99221") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                99221
              </td>
            </tr>
            <tr>
              <td>Initial Hospital H&P</td>
              <td id="99222" style={this.state.services.indexOf("99222") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                99222
              </td>
            </tr>
            <tr>
              <td>Initial Hospital H&P</td>
              <td id="99223" style={this.state.services.indexOf("99223") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                99223
              </td>
            </tr>
            <tr>
              <td>F/u Hospital</td>
              <td id="99231" style={this.state.services.indexOf("99231") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                99231
              </td>
            </tr>
            <tr>
              <td>F/u Hospital</td>
              <td id="99232" style={this.state.services.indexOf("99232") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                99232
              </td>
            </tr>
            <tr>
              <td>F/u Hospital</td>
              <td id="99233" style={this.state.services.indexOf("99233") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                99233
              </td>
            </tr>
            <tr className="category_tr">
              <td>PROCEDURES</td>
              <td></td>
            </tr>
            <tr>
              <td>Ext photos</td>
              <td id="92285" style={this.state.services.indexOf("92285") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                92285
              </td>
            </tr>
            <tr>
              <td>Gonioscopy</td>
              <td id="92020" style={this.state.services.indexOf("92020") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                92020
              </td>
            </tr>
            <tr>
              <td>Refraction</td>
              <td id="92015" style={this.state.services.indexOf("92015") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                92015
              </td>
            </tr>
            <tr>
              <td>Oculomotor</td>
              <td id="92060" style={this.state.services.indexOf("92060") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                92060
              </td>
            </tr>
            <tr>
              <td>OCT angle</td>
              <td id="92132" style={this.state.services.indexOf("92132") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                92132
              </td>
            </tr>
            <tr>
              <td>NFL (HRT / OCT)</td>
              <td id="92133" style={this.state.services.indexOf("92133") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                92133
              </td>
            </tr>
            <tr>
              <td>OCT-macula</td>
              <td id="92134" style={this.state.services.indexOf("92134") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                92134
              </td>
            </tr>
            <tr>
              <td>VF, Intermediate</td>
              <td id="92082" style={this.state.services.indexOf("92082") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                92082
              </td>
            </tr>
            <tr>
              <td>VF, Extended</td>
              <td id="92083" style={this.state.services.indexOf("92083") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                92083
              </td>
            </tr>
            <tr>
              <td>Pachymetry</td>
              <td id="76514" style={this.state.services.indexOf("76514") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                76514
              </td>
            </tr>
            <tr>
              <td>Endothelial cell count</td>
              <td id="92286" style={this.state.services.indexOf("92286") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                92286
              </td>
            </tr>
            <tr>
              <td>A-Scan 1st eye OD/OS</td>
              <td id="76519" style={this.state.services.indexOf("76519") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                76519
              </td>
            </tr>
            <tr>
              <td>A-Scan 2nd eye OD/OS</td>
              <td id="76519-26" style={this.state.services.indexOf("76519-26") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                76519-26
              </td>
            </tr>
            <tr>
              <td>B-scan OD/OS</td>
              <td id="76512" style={this.state.services.indexOf("76512") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                76512
              </td>
            </tr>
            <tr>
              <td>IOL Master</td>
              <td id="92136" style={this.state.services.indexOf("92136") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                92136
              </td>
            </tr>
            <tr>
              <td>Tear film</td>
              <td id="92284" style={this.state.services.indexOf("92284") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                92284
              </td>
            </tr>
            <tr>
              <td>Endothelial cell density</td>
              <td id="92286" style={this.state.services.indexOf("92286") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                92286
              </td>
            </tr>
            <tr className="category_tr">
              <td>Dx SERVICES</td>
              <td></td>
            </tr>
            <tr>
              <td>INJECTIONS</td>
              <td></td>
            </tr>
            <tr>
              <td>SubTenons OD/OS</td>
              <td id="76515" style={this.state.services.indexOf("76515") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                76515
              </td>
            </tr>
            <tr>
              <td>Subconjun OD/OS</td>
              <td id="68200" style={this.state.services.indexOf("68200") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                68200
              </td>
            </tr>
            <tr>
              <td>Subcut OD/OS</td>
              <td id="90782" style={this.state.services.indexOf("90782") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                90782
              </td>
            </tr>
            <tr className="category_tr">
              <td>MODIFIERS</td>
              <td></td>
            </tr>
            <tr>
              <td>Unrelated svc dur p.o.</td>
              <td id="-24" style={this.state.services.indexOf("-24") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -24
              </td>
            </tr>
            <tr>
              <td>Signif/sep Visit on surg day</td>
              <td id="-25" style={this.state.services.indexOf("-25") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -25
              </td>
            </tr>
            <tr>
              <td>UNRELATED surg dur p.o.</td>
              <td id="-79" style={this.state.services.indexOf("-79") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -79
              </td>
            </tr>
            <tr>
              <td>Professional Component</td>
              <td id="-26" style={this.state.services.indexOf("-26") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -26
              </td>
            </tr>
            <tr>
              <td>Rel'd surg dur po(Complic)</td>
              <td id="-78" style={this.state.services.indexOf("-78") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -78
              </td>
            </tr>
            <tr>
              <td>Unplanned decision for surg</td>
              <td id="-57" style={this.state.services.indexOf("-57") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -57
              </td>
            </tr>
            <tr>
              <td>Staged proc (lesser>greater)</td>
              <td id="-58" style={this.state.services.indexOf("-58") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -58
              </td>
            </tr>
            <tr>
              <td>Two Surgeons</td>
              <td id="-62" style={this.state.services.indexOf("-62") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -62
              </td>
            </tr>
            <tr>
              <td>Rpt proced by same surg</td>
              <td id="-76" style={this.state.services.indexOf("-76") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -76
              </td>
            </tr>
            <tr>
              <td>Assistant surgeon</td>
              <td id="-80" style={this.state.services.indexOf("-80") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -80
              </td>
            </tr>
            <tr>
              <td>Multiple modifiers</td>
              <td id="-99" style={this.state.services.indexOf("-99") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -99
              </td>
            </tr>
            <tr>
              <td>Complex, lengthy</td>
              <td id="-22" style={this.state.services.indexOf("-22") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -22
              </td>
            </tr>
            <tr>
              <td>Bilateral</td>
              <td id="-50" style={this.state.services.indexOf("-50") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -50
              </td>
            </tr>
            <tr>
              <td>Multiple</td>
              <td id="-51" style={this.state.services.indexOf("-51") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -51
              </td>
            </tr>
            <tr>
              <td>Surgery Infant</td>
              <td id="-63" style={this.state.services.indexOf("-63") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -63
              </td>
            </tr>
            <tr>
              <td>ABN</td>
              <td id="-GA" style={this.state.services.indexOf("-GA") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -GA
              </td>
            </tr>
            <tr>
              <td>Noncovered</td>
              <td id="-GY" style={this.state.services.indexOf("-GY") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -GY
              </td>
            </tr>
            <tr>
              <td>Write-Off</td>
              <td id="-GZ" style={this.state.services.indexOf("-GZ") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -GZ
              </td>
            </tr>
            <tr>
              <td>Technical component</td>
              <td id="-TC" style={this.state.services.indexOf("-TC") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                -TC
              </td>
            </tr>
          </tbody>
        </table>
        <div id="body_col1_row2">
          <div><b>Diagnosis (ICD-10)</b></div>
          <table>
            <thead></thead>
            <tbody>
              <tr><td></td><td></td></tr>
              <tr><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
        </div>
        <table>
          <thead></thead>
          <tbody>
            <tr className="category_tr"><td>SERVICE</td><td>CODE</td></tr>
            <tr className="category_tr"><td>IN-OFFICE SURGERY</td><td></td></tr>
            <tr>
              <td>Bleb Needling OD/OS (90d po)</td>
              <td id="66250-78" style={this.state.services.indexOf("66250-78") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
                66250-78
              </td>
            </tr>
            <tr>
              <td>Chal, Exc Single OD/OS (10d po)</td>
              <td id="67800" style={this.state.services.indexOf("67800") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67800
              </td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;MultSameLid OD/OS (10d po)</td>
              <td id="67801" style={this.state.services.indexOf("67801") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67801
              </td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;Mult Dif Lid OD/OS (10d po)</td>
              <td id="67805" style={this.state.services.indexOf("67805") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67805
              </td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;Anesthes/Hosp (90d po)</td>
              <td id="67808" style={this.state.services.indexOf("67808") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67808
              </td>
            </tr>
            <tr>
              <td>Corneal Scraping OD/OS (no po)</td>
              <td id="65430" style={this.state.services.indexOf("65430") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              65430
              </td>
            </tr>
            <tr>
              <td>Tissue Culture OD/OS (no po)</td>
              <td id="88233" style={this.state.services.indexOf("88233") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              88233
              </td>
            </tr>
            <tr>
              <td>Bacterial Culture OD/OS (no po)</td>
              <td id="87070" style={this.state.services.indexOf("87070") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              87070
              </td>
            </tr>
            <tr>
              <td>Epilation Forceps (no po)</td>
              <td id="67820" style={this.state.services.indexOf("67820") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67820
              </td>
            </tr>
            <tr>
              <td>Exc Eyelid Lesion OD/OS (no po)</td>
              <td id="67840" style={this.state.services.indexOf("67840") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67840
              </td>
            </tr>
            <tr>
              <td>Exc Facial Lesion (10d po)</td>
              <td id="11440" style={this.state.services.indexOf("11440") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              11440
              </td>
            </tr>
            <tr>
              <td>Eyelid injection OD/OS (no po)</td>
              <td id="11900" style={this.state.services.indexOf("11900") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              11900
              </td>
            </tr>
            <tr>
              <td>Hyfrecation OD/OS (10d po)</td>
              <td id="67825" style={this.state.services.indexOf("67825") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67825
              </td>
            </tr>
            <tr>
              <td>Intravitreal Injection (no po)</td>
              <td id="67028" style={this.state.services.indexOf("67028") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67028
              </td>
            </tr>
            <tr>
              <td>Punctoplasty OD/OS (10d po)</td>
              <td id="68440" style={this.state.services.indexOf("68440") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              68440
              </td>
            </tr>
            <tr>
              <td>Nasolacrimal probing OD/OS (10d po)</td>
              <td id="68810" style={this.state.services.indexOf("68810") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              68810
              </td>
            </tr>
            <tr>
              <td>Prob Lac Canaliculi (10d po)</td>
              <td id="68840" style={this.state.services.indexOf("68840") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              68840
              </td>
            </tr>
            <tr>
              <td>Punct Clos, Caut OD/OS (10d po)</td>
              <td id="68760" style={this.state.services.indexOf("68760") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              68760
              </td>
            </tr>
            <tr>
              <td>Punct Dilation (10d po)</td>
              <td id="68801" style={this.state.services.indexOf("68801") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              68801
              </td>
            </tr>
            <tr>
              <td>Punct Probe, Plug OD/OS (10d po)</td>
              <td id="68761" style={this.state.services.indexOf("68761") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              68761
              </td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic OD/OS</td>
              <td id="A4263" style={this.state.services.indexOf("A4263") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              A4263
              </td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Absorb OD/OS</td>
              <td id="A4262" style={this.state.services.indexOf("A4262") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              A4262
              </td>
            </tr>
            <tr>
              <td>Paracentesis OD/OS (90d po)</td>
              <td id="65815" style={this.state.services.indexOf("65815") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              65815
              </td>
            </tr>
            <tr>
              <td>Removal FB Conj OD/OS (no po)</td>
              <td id="65222" style={this.state.services.indexOf("65222") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              65222
              </td>
            </tr>
            <tr>
              <td>Remove FB Corneal OD/OS (no po)</td>
              <td id="65205" style={this.state.services.indexOf("65205") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              65205
              </td>
            </tr>
            <tr>
              <td>Subconjunctival inj. OD/OS (no po)</td>
              <td id="68200" style={this.state.services.indexOf("68200") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              68200
              </td>
            </tr>
            <tr>
              <td>Wound dehisce repair OD/OS</td>
              <td></td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simple/Complex</td>
              <td className="service_and_icd_tr">
              <span id="12020" style={this.state.services.indexOf("12020") != -1 ? {...this.state.service_style} : undefined} onClick={this.onClickService}>12020</span>/
              <span id="13160" style={this.state.services.indexOf("13160") != -1 ? {...this.state.service_style} : undefined} onClick={this.onClickService}>13160</span>
              </td>
            </tr>
            <tr className="category_tr"><td>SUPPLIES/MEDS</td><td></td></tr>
            <tr>
              <td>Ant. Chamber Viscoelastic Injection</td>
              <td id="66020" style={this.state.services.indexOf("66020") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              66020
              </td>
            </tr>
            <tr>
              <td>BCTL OD/OS</td>
              <td id="92071" style={this.state.services.indexOf("92071") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              92071
              </td>
            </tr>
            <tr>
              <td>Supplies/materials</td>
              <td id="99070" style={this.state.services.indexOf("99070") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              99070
              </td>
            </tr>
            <tr>
              <td>Triamcinolone/Dexamethasone</td>
              <td className="service_and_icd_tr">
              <span id="J3301" style={this.state.services.indexOf("J3301") != -1 ? this.state.service_style : undefined} onClick={this.onClickService}>
                J3301
              </span>/
              <span id="J1100" style={this.state.services.indexOf("J1100") != -1 ? this.state.service_style : undefined} onClick={this.onClickService}>
                J1100
              </span>
              </td>
            </tr>
            <tr>
              <td>Botulinum A?B</td>
              <td className="service_and_icd_tr">
                <span id="J0585" style={this.state.services.indexOf("J0585") != -1 ? this.state.service_style : undefined} onClick={this.onClickService}>
                J0585</span>/
                <span id="J0587" style={this.state.services.indexOf("J0587") != -1 ? this.state.service_style : undefined} onClick={this.onClickService}>
                J0587</span>
              </td>
            </tr>
            <tr>
              <td>5-Fluorouracil</td>
              <td id="J9190" style={this.state.services.indexOf("J9190") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              J9190
              </td>
            </tr>
            <tr>
              <td>MMC</td>
              <td id="J9280" style={this.state.services.indexOf("J9280") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              J9280
              </td>
            </tr>
            <tr className="category_tr"><td>LASERS</td><td></td></tr>
            <tr>
              <td>ALT/SLT OD/OS (10d po)</td>
              <td id="65855" style={this.state.services.indexOf("65855") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              65855
              </td>
            </tr>
            <tr>
              <td>LPI OD/OS (10d po)</td>
              <td id="66761" style={this.state.services.indexOf("66761") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              66761
              </td>
            </tr>
            <tr>
              <td>YAG Caps (90d po)</td>
              <td id="66821" style={this.state.services.indexOf("66821") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              66821
              </td>
            </tr>
            <tr>
              <td>Focal laser OD/OS (90d po)</td>
              <td id="67210" style={this.state.services.indexOf("67210") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67210
              </td>
            </tr>
            <tr>
              <td>PRP laser OD/OS (90d po)</td>
              <td id="67228" style={this.state.services.indexOf("67228") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67228
              </td>
            </tr>
            <tr className="category_tr"><td>SURGERIES</td><td></td></tr>
            <tr>
              <td>Blepharoplasty OD/OS (90d po)</td>
              <td id="15823" style={this.state.services.indexOf("15823") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              15823
              </td>
            </tr>
            <tr>
              <td>Botox injection OD/OS (10d po)</td>
              <td id="64612" style={this.state.services.indexOf("64612") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              64612
              </td>
            </tr>
            <tr>
              <td>Brow Lift OD/OS (90d po)</td>
              <td id="67900" style={this.state.services.indexOf("67900") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67900
              </td>
            </tr>
            <tr>
              <td>Cat/IOL OD/OS (90d po)</td>
              <td className="service_and_icd_tr">
              <span id="66984" style={this.state.services.indexOf("66984") != -1 ? this.state.service_style : undefined} onClick={this.onClickService}>
              66984</span>/
              <span id="66982" style={this.state.services.indexOf("66982") != -1 ? this.state.service_style : undefined} onClick={this.onClickService}>
              66982</span>
              </td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iStent OD/OS</td>
              <td id="0191T" style={this.state.services.indexOf("0191T") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              0191T
              </td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ant. Vitrectomy OD/OS (90d po)</td>
              <td id="67005" style={this.state.services.indexOf("67005") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67005
              </td>
            </tr>
            <tr>
              <td>Ectropion OD/OS (90d po)</td>
              <td id="67950" style={this.state.services.indexOf("67950") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67950
              </td>
            </tr>
            <tr>
              <td>Enucleation OD/OS (90d po)</td>
              <td id="65105" style={this.state.services.indexOf("65105") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              65105
              </td>
            </tr>
            <tr>
              <td>EUA OD/OS (no po)</td>
              <td id="92018" style={this.state.services.indexOf("92018") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              92018
              </td>
            </tr>
            <tr>
              <td>Goniotomy OD/OS (90d po)</td>
              <td id="65820" style={this.state.services.indexOf("65820") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              65820
              </td>
            </tr>
            <tr>
              <td>Hughes flap (up to 2/3)/(over 2/3)</td>
              <td className="service_and_icd_tr">
                <span id="67971" style={this.state.services.indexOf("67971") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
                67971</span>/
                <span id="67973" style={this.state.services.indexOf("67973") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
                67973</span>
              </td>
            </tr>
            <tr>
              <td>2nd stage Hughes/median forehead flap</td>
              <td className="service_and_icd_tr">
                <span id="67975" style={this.state.services.indexOf("67975") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
                67975</span>/
                <span id="67978" style={this.state.services.indexOf("67978") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
                67978</span>
              </td>
            </tr>
            <tr>
              <td>IOL Exchange OD/OS (90d po)</td>
              <td id="66986" style={this.state.services.indexOf("66986") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              66986
              </td>
            </tr>
            <tr>
              <td>Lat. canthoplasty OD/OS (90d po)</td>
              <td id="67950" style={this.state.services.indexOf("67950") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67950
              </td>
            </tr>
            <tr>
              <td>Medial spindle OD/OS (90d po)</td>
              <td id="67914" style={this.state.services.indexOf("67914") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67914
              </td>
            </tr>
            <tr>
              <td>Pterygect. w/wo graft OD/OS (90d po)</td>
              <td className="service_and_icd_tr">
              <span id="65426" style={this.state.services.indexOf("65426") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
              65426</span>/
              <span id="65420" style={this.state.services.indexOf("65420") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
              65420</span>
              </td>
            </tr>
            <tr>
              <td>Prokera In-Off/Hosp</td>
              <td className="service_and_icd_tr">
              <span id="65778" style={this.state.services.indexOf("65778") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
              65778</span>/
              <span id="65780" style={this.state.services.indexOf("65780") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
              65780</span>
              </td>
            </tr>
            <tr>
              <td>Ptosis OD/OS (90d po)</td>
              <td className="service_and_icd_tr">
                <span id="67904" style={this.state.services.indexOf("67904") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
                  67904</span>/
                <span id="67908" style={this.state.services.indexOf("67908") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
                  67908</span>
              </td>
            </tr>
            <tr>
              <td>Retraction repair</td>
              <td id="67911" style={this.state.services.indexOf("67911") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              67911
              </td>
            </tr>
            <tr>
              <td>Scar excision (no po)</td>
              <td id="15004" style={this.state.services.indexOf("15004") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              15004
              </td>
            </tr>
            <tr>
              <td>Shunt revision OD/OS (90d po)</td>
              <td id="66185" style={this.state.services.indexOf("66185") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              66185
              </td>
            </tr>
            <tr>
              <td>Stents OD/OS (10d po)</td>
              <td id="68815" style={this.state.services.indexOf("68815") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              68815
              </td>
            </tr>
            <tr>
              <td>Suture IOL/Pupilloplasty OD/OS (90d)</td>
              <td id="66682" style={this.state.services.indexOf("66682") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              66682
              </td>
            </tr>
            <tr>
              <td>Tarsorrhaphy OD/OS (90d po)</td>
              <td className="service_and_icd_tr">
                <span id="67880" style={this.state.services.indexOf("67880") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
                  67880</span>/
                <span id="67875" style={this.state.services.indexOf("67875") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
                  67875</span>
              </td>
            </tr>
            <tr>
              <td>Tissue rearrangement OD/OS (90d po)</td>
              <td id="14060" style={this.state.services.indexOf("14060") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} className="service_and_icd_tr">
              14060
              </td>
            </tr>
            <tr>
              <td>Trab/MMC OD/OS (90d po)</td>
              <td className="service_and_icd_tr">
                <span id="66170" style={this.state.services.indexOf("66170") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
                  66170</span>/
                <span id="66172" style={this.state.services.indexOf("66172") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
                  66172</span>
              </td>
            </tr>
            <tr>
              <td>Tube & Patch OD/OS (90d po)</td>
              <td className="service_and_icd_tr">
                <span id="66180" style={this.state.services.indexOf("66180") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
                  66180</span>/
                <span id="67255" style={this.state.services.indexOf("67255") != -1 ? this.state.service_style : undefined} onClick={this.onClickService} >
                  67255</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead></thead>
          <tbody>
            <tr className="category_tr"><td>DIAGNOSIS</td><td>CODE</td></tr>
            <tr className="category_tr"><td>SYSTEMIC DZ</td><td></td></tr>
            <tr>
              <td>Diab/IDDM</td>
              <td id="E10.9" style={this.state.diagnosis.indexOf("E10.9") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
              250.01/E10.9
              </td>
            </tr>
            <tr>
              <td>Diab/NIDDM</td>
              <td id="E11.9" style={this.state.diagnosis.indexOf("E11.9") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
              250.00/E11.9
              </td>
            </tr>
            <tr>
              <td>Diab/Ophtho Mgmt</td>
              <td id="E11.39" style={this.state.diagnosis.indexOf("E11.39") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
              250.50/E11.39
              </td>
            </tr>
            <tr>
              <td>Hypertension</td>
              <td id="I12.9" style={this.state.diagnosis.indexOf("I12.9") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
              403.90/I12.9
              </td>
            </tr>
            <tr className="category_tr"><td>CATARACT</td><td></td></tr>
            <tr>
              <td>PCO</td>
              <td id="H26.49E" style={this.state.diagnosis.indexOf("H26.49E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
              366.53/H26.49<input type="text" placeholder="E" style={{width: "10px",textAlign: "center",padding: 0, border: 0}}/>
              </td>
            </tr>
            <tr>
              <td>Nuclear Presenile</td>
              <td id="H26.03E" style={this.state.diagnosis.indexOf("H26.03E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
              366.04/H26.03<input type="text" placeholder="E" style={{width: "10px",textAlign: "center",padding: 0, border: 0}}/>
              </td>
            </tr>
            <tr>
              <td>Nuclear Senile</td>
              <td id="H25.1E" style={this.state.diagnosis.indexOf("H25.1E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
              366.16/H25.1<input type="text" placeholder="E" style={{width: "10px",textAlign: "center",padding: 0, border: 0}}/>
              </td>
            </tr>
            <tr>
              <td>Post Subcap Senile</td>
              <td id="H25.04E" style={this.state.diagnosis.indexOf("H25.04E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
              366.14/H25.04<input type="text" placeholder="E" style={{width: "8px",textAlign: "center", padding: 0, border: 0}}/>
              </td>
            </tr>
            <tr>
              <td>Mature cataract</td>
              <td id="H25.09E" style={this.state.diagnosis.indexOf("H25.09E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
              366.17/H25.09<input type="text" placeholder="E" style={{width: "8px", textAlign: "center",padding: 0, border: 0}}/>
              </td>
            </tr>
            <tr>
              <td>Pseudophakia</td>
              <td id="Z96.1" style={this.state.diagnosis.indexOf("Z96.1") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
              V43.1/Z96.1
            </td>
            </tr>
            <tr className="category_tr"><td>CORNEA/EXT DZ</td><td></td></tr>
            <tr>
              <td>Blepharitis</td>
              <td id="H01.00L" style={this.state.diagnosis.indexOf("H01.00L") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                373.00/H01.00<input type="text" placeholder="L" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Rosacea</td>
              <td id="L71.9" style={this.state.diagnosis.indexOf("L71.9") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
              695.3/L71.9
              </td>
            </tr>
            <tr>
              <td>Conj Neopl, Benign</td>
              <td id="D31.0E" style={this.state.diagnosis.indexOf("D31.0E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                224.3/D31.0<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Conj-itis, Acute</td>
              <td id="H10.3E" style={this.state.diagnosis.indexOf("H10.03E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                372.00/H10.3<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Conj-itis, Allergic</td>
              <td id="H10.3E" style={this.state.diagnosis.indexOf("H10.03E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                372.05/H10.1<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Conj-itis, Chronic</td>
              <td id="H40.10E" style={this.state.diagnosis.indexOf("H40.10E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                372.10/H40.10<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Conj-itis, Follicular</td>
              <td id="H10.0E" style={this.state.diagnosis.indexOf("H10.0E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                372.02/H10.0<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Corneal Abrasion</td>
              <td id="S05.0E" style={this.state.diagnosis.indexOf("S05.0E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                918.1/S05.0<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Corneal edema</td>
              <td id="H18.23E" style={this.state.diagnosis.indexOf("H18.23E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                371.22/H18.23<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Corneal Opac, Central</td>
              <td id="H17.1E" style={this.state.diagnosis.indexOf("H17.1E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                371.03/H17.1<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Corneal Opac, Periph</td>
              <td id="H17.82E" style={this.state.diagnosis.indexOf("H17.82E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                371.02/H17.82<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Corneal Pannus</td>
              <td id="H16.42E" style={this.state.diagnosis.indexOf("H16.42E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                370.62/H16.42<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Corneal Ulcer, Central</td>
              <td id="H16.01E" style={this.state.diagnosis.indexOf("H16.01E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                370.03/H16.01<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Corneal Ulcer, Periph</td>
              <td id="H16.00E" style={this.state.diagnosis.indexOf("H16.00E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                370.00/H16.00<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Dry Eye</td>
              <td id="H04.12E" style={this.state.diagnosis.indexOf("H04.12E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                375.15/H04.12<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>EKC</td>
              <td id="B30.0" style={this.state.diagnosis.indexOf("B30.0") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                077.1/B30.0
              </td>
            </tr>
            <tr>
              <td>Expos Keratitis</td>
              <td id="H16.21E" style={this.state.diagnosis.indexOf("H16.21E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                370.34/H16.21<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>FB, Cornea</td>
              <td id="T15.0EXA" style={this.state.diagnosis.indexOf("T15.0EXA") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                930.0/T15.0<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />XA
              </td>
            </tr>
            <tr>
              <td>Keratitis, Superfic</td>
              <td id="H16.10E" style={this.state.diagnosis.indexOf("H16.10E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                370.20/H16.10<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Medicamentosa</td>
              <td id="H10.01E" style={this.state.diagnosis.indexOf("H10.01E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                372.02/H10.01<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Meibomitis</td>
              <td id="H00.02L" style={this.state.diagnosis.indexOf("H00.02L") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                373.12/H00.02<input type="text" placeholder="L" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Prim Acq Melanosis</td>
              <td id="D31.0E" style={this.state.diagnosis.indexOf("D31.0E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                224.3/D31.0<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Pterygium, Progress</td>
              <td id="H11.05E" style={this.state.diagnosis.indexOf("H11.05E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                372.42/H11.05<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Pterygium, Stationary</td>
              <td id="H11.04E" style={this.state.diagnosis.indexOf("H11.04E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                372.41/H11.04<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Pterygium, Unspec</td>
              <td id="H11.00E" style={this.state.diagnosis.indexOf("H11.00E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                372.40/H11.00<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Pingueculae</td>
              <td id="H11.15E" style={this.state.diagnosis.indexOf("H11.15E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                372.51/H11.15<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Recurrent Erosion</td>
              <td id="H18.83E" style={this.state.diagnosis.indexOf("H18.83E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                371.42/H18.83<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Subconj Heme</td>
              <td id="H11.3E" style={this.state.diagnosis.indexOf("H11.3E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                372.72/H11.3<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr className="category_tr"><td>EYELIDS</td><td></td></tr>
            <tr>
              <td>Anophthalmia</td>
              <td id="H44.89" style={this.state.diagnosis.indexOf("H44.89") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                360.89/H44.89
              </td>
            </tr>
            <tr>
              <td>Chalazion</td>
              <td id="H00.1L" style={this.state.diagnosis.indexOf("H00.1L") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                373.2/H00.1<input type="text" placeholder="L" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Dermatitis</td>
              <td id="H01.11L" style={this.state.diagnosis.indexOf("H01.11L") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                373.32/H01.11<input type="text" placeholder="L" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Dermatochalasis</td>
              <td id="H02.83L" style={this.state.diagnosis.indexOf("H02.83L") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                374.87/H02.83<input type="text" placeholder="L" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Ectropion, Senile</td>
              <td id="H02.13L" style={this.state.diagnosis.indexOf("H02.13L") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                374.11/H02.13<input type="text" placeholder="L" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Edema Eyelid</td>
              <td id="H02.84L" style={this.state.diagnosis.indexOf("H02.84L") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                374.82/H02.84<input type="text" placeholder="L" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edema unspec</td>
              <td id="R60.9" style={this.state.diagnosis.indexOf("R60.9") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                782.3/R60.9
              </td>
            </tr>
            <tr>
              <td>Entropion, Cicatricial</td>
              <td id="H02.01L" style={this.state.diagnosis.indexOf("H02.01L") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                374.04/H02.01<input type="text" placeholder="L" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Entropion, Unspec</td>
              <td id="H02.00L" style={this.state.diagnosis.indexOf("H02.00L") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                374.00/H02.00<input type="text" placeholder="L" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Entropion, Senile</td>
              <td id="H02.03L" style={this.state.diagnosis.indexOf("H02.03L") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                374.01/H02.03<input type="text" placeholder="L" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Epiblepharon</td>
              <td id="Q10.E" style={this.state.diagnosis.indexOf("Q10.E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                743.62/Q10.<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Epiphora</td>
              <td id="H04.21E" style={this.state.diagnosis.indexOf("H04.21E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                375.21/H04.21<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td id="H04.22E" style={this.state.diagnosis.indexOf("H04.22E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                375.22/H04.22<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Lagophthalmos</td>
              <td id="H02.20L" style={this.state.diagnosis.indexOf("H02.20L") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                374.20/H02.20<input type="text" placeholder="L" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>NLDO, Acq</td>
              <td id="H04.55E" style={this.state.diagnosis.indexOf("H04.55E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                375.56/H04.55<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>NLDO, Cong</td>
              <td id="Q10.5" style={this.state.diagnosis.indexOf("Q10.5") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                743.65/Q10.5
              </td>
            </tr>
            <tr>
              <td>Punctal Stenosis</td>
              <td id="H04.56E" style={this.state.diagnosis.indexOf("H04.56E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                375.52/H04.56<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Neoplasm, Benign</td>
              <td id="D23.1E" style={this.state.diagnosis.indexOf("D23.1E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                216.1/D23.1<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Neoplasm, Malignant</td>
              <td id="C44.1E" style={this.state.diagnosis.indexOf("C44.1E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                173.1/C44.1<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Neoplasm, Unspec</td>
              <td id="D48.5" style={this.state.diagnosis.indexOf("D48.5") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                238.2/D48.5
              </td>
            </tr>
            <tr>
              <td>Ptosis, Mech</td>
              <td id="H02.41E" style={this.state.diagnosis.indexOf("H02.41E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                374.33/H02.41<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Ptosis, Myog</td>
              <td id="H02.42E" style={this.state.diagnosis.indexOf("H02.42E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                374.32/H02.42<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Ptosis, Paralytic</td>
              <td id="H02.43E" style={this.state.diagnosis.indexOf("H02.43E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                374.31/H02.43<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Retraction</td>
              <td id="H02.53L" style={this.state.diagnosis.indexOf("H02.53L") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                374.41/H02.53<input type="text" placeholder="L" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Scar eyelid</td>
              <td id="L90.5" style={this.state.diagnosis.indexOf("L90.5") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                709.2/L90.5
              </td>
            </tr>
            <tr>
              <td>Trichiasis w/o Entrop</td>
              <td id="H02.05L" style={this.state.diagnosis.indexOf("H02.05L") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                374.05/H02.05<input type="text" placeholder="L" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Wound dehisc</td>
              <td id="T81.31Z" style={this.state.diagnosis.indexOf("T81.31Z") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                998.32/T81.31<input type="text" placeholder="Z" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr className="category_tr"><td>REFRACTION</td><td></td></tr>
            <tr>
              <td>Anisometropia</td>
              <td id="H52.31" style={this.state.diagnosis.indexOf("H52.31") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                367.31/H52.31
              </td>
            </tr>
            <tr>
              <td>Astigmatism, Irregular</td>
              <td id="H52.21E" style={this.state.diagnosis.indexOf("H52.21E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                367.22/H52.21<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead></thead>
          <tbody>
            <tr className="category_tr"><td>DIAGNOSIS</td><td>CODE</td></tr>
            <tr className="category_tr"><td>GLAUCOMA</td><td></td></tr>
            <tr>
              <td>Angle, Narrow</td>
              <td id="H40.06E" style={this.state.diagnosis.indexOf("H40.06E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                365.02/H40.6<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Angle-Closure, Acute</td>
              <td id="H40.21E" style={this.state.diagnosis.indexOf("H40.21E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                365.22/H40.21<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Angle-Closure, Chronic</td>
              <td id="H40.22EY" style={this.state.diagnosis.indexOf("H40.22EY") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                365.23/H40.22<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} /><input type="text" placeholder="Y" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Glauc w/ Inflamm</td>
              <td id="H40.4XY" style={this.state.diagnosis.indexOf("H40.4XY") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                365.62/H40.4<input type="text" placeholder="X" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} /><input type="text" placeholder="Y" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Glauc w/ Vasc Disorder</td>
              <td id="H40.89" style={this.state.diagnosis.indexOf("H40.89") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                365.63/H40.89
              </td>
            </tr>
            <tr>
              <td>Hypotony, Fistula Caus</td>
              <td id="H44.42E" style={this.state.diagnosis.indexOf("H44.42E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                360.32/H44.42<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Hypotony, Other D/o</td>
              <td id="H44.43E" style={this.state.diagnosis.indexOf("H44.43E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                360.33/H44.43<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Low Tension Glaucoma</td>
              <td id="H40.12EY" style={this.state.diagnosis.indexOf("H40.12EY") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                365.12/H40.12<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} /><input type="text" placeholder="Y" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>POAG-Chronic</td>
              <td id="H40.11XY" style={this.state.diagnosis.indexOf("H40.11XY") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                365.11/H40.11<input type="text" placeholder="X" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} /><input type="text" placeholder="Y" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Pigment Dispers Syndr</td>
              <td id="H21.23E" style={this.state.diagnosis.indexOf("H21.23E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                364.53/H21.23<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Pigmentary</td>
              <td id="H40.13E" style={this.state.diagnosis.indexOf("H40.13E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                365.13/H40.13<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Pseudoexfoliation</td>
              <td id="H40.14E" style={this.state.diagnosis.indexOf("H40.14E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                365.52/H40.14<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Rubeosis irides</td>
              <td id="H21.1XE" style={this.state.diagnosis.indexOf("H21.1XE") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                364.42/H21.1<input type="text" placeholder="X" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} /><input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Steroid-induced</td>
              <td id="H40.6XY" style={this.state.diagnosis.indexOf("H40.6XY") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                365.31/H40.6<input type="text" placeholder="X" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} /><input type="text" placeholder="Y" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Steroid Responder</td>
              <td id="H40.04E" style={this.state.diagnosis.indexOf("H40.04E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                365.03/H40.04<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Suspect Glauc</td>
              <td id="H40.00E" style={this.state.diagnosis.indexOf("H40.00E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                365.00/H40.00<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Ocular Hypertension</td>
              <td id="H40.05E" style={this.state.diagnosis.indexOf("H40.05E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                365.04/H40.05<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Traumatic glaucoma</td>
              <td id="H40.3EXY" style={this.state.diagnosis.indexOf("H40.3EXY") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                365.65/H40.3<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} /><input type="text" placeholder="X" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} /><input type="text" placeholder="Y" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Absolute glaucoma</td>
              <td id="H44.5E" style={this.state.diagnosis.indexOf("H44.5E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                360.42/H44.5<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Leaking bleb</td>
              <td id="H44.40" style={this.state.diagnosis.indexOf("H44.40") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                360.30/H44.40
              </td>
            </tr>
            <tr>
              <td>Hypotony/Ocular*</td>
              <td id="H44.42E" style={this.state.diagnosis.indexOf("H44.42E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                360.30/H44.42<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Flat Anterior Chamber</td>
              <td id="H44.41E" style={this.state.diagnosis.indexOf("H44.41E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                360.34/H44.41<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Congenital</td>
              <td id="Q15.0" style={this.state.diagnosis.indexOf("Q15.0") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                743.20/Q15.0
              </td>
            </tr>
            <tr>
              <td>Tube Erosion of Plate</td>
              <td id="T85.698A" style={this.state.diagnosis.indexOf("T85.698A") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                T85.698<input type="text" placeholder="A" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr className="category_tr"><td>INFLAMMATION</td><td></td></tr>
            <tr>
              <td>Episcleritis</td>
              <td id="H15.12E" style={this.state.diagnosis.indexOf("H15.12E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                379.02/H15.12<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Iridocyc, Acute</td>
              <td id="H20.01E" style={this.state.diagnosis.indexOf("H20.01E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                364.00/H20.01<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Iridocyc, Chronic</td>
              <td id="H20.1E" style={this.state.diagnosis.indexOf("H20.1E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                364.10/H20.1<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Iridocyc, Recurrent</td>
              <td id="H20.02E" style={this.state.diagnosis.indexOf("H20.02E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                364.02/H20.02<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Scleritits, Anterior</td>
              <td id="H15.01E" style={this.state.diagnosis.indexOf("H15.01E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                379.03/H15.01<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr className="category_tr"><td>NEURO/STRAB</td><td></td></tr>
            <tr>
              <td>Amblyopia-Refract</td>
              <td id="H53.02E" style={this.state.diagnosis.indexOf("H53.02E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                368.03/H53.02<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Amblyopia-Strab</td>
              <td id="H53.03E" style={this.state.diagnosis.indexOf("H53.03E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                368.01/H53.03<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Blepharospasm</td>
              <td id="G24.5" style={this.state.diagnosis.indexOf("") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                333.81/G24.5
              </td>
            </tr>
            <tr>
              <td>CN III palsy partial</td>
              <td id="H49.0E" style={this.state.diagnosis.indexOf("H49.0E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                378.51/H49.0<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total*</td>
              <td id="H49.3E" style={this.state.diagnosis.indexOf("H49.3E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                378.52/H49.3<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>CN VI palsy</td>
              <td id="H49.2E" style={this.state.diagnosis.indexOf("H49.2E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                378.54/H49.2<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>CN VII palsy/Bell's</td>
              <td id="G51.0" style={this.state.diagnosis.indexOf("G51.0") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                351.0/G51.0
              </td>
            </tr>
            <tr>
              <td>Hemifacial Spasm</td>
              <td id="G51.3" style={this.state.diagnosis.indexOf("G51.3") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                351.8/G51.3
              </td>
            </tr>
            <tr>
              <td>Esotropia, Unspecif</td>
              <td id="H50.00" style={this.state.diagnosis.indexOf("H50.00") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                378.00/H50.00
              </td>
            </tr>
            <tr>
              <td>Exophthlamos, Unspec</td>
              <td id="H05.20" style={this.state.diagnosis.indexOf("H05.20") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                376.30/H05.20
              </td>
            </tr>
            <tr>
              <td>Exotropia, Unspec</td>
              <td id="H50.10" style={this.state.diagnosis.indexOf("H50.10") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                378.10/H50.10
              </td>
            </tr>
            <tr>
              <td>Migraine Headache</td>
              <td id="G43.109" style={this.state.diagnosis.indexOf("G43.109") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                346.00/G43.109
              </td>
            </tr>
            <tr>
              <td>Optic Neuropathy Unsp</td>
              <td id="H46.9" style={this.state.diagnosis.indexOf("H46.9") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                377.39/H46.9
              </td>
            </tr>
            <tr>
              <td>Papilledema, Unspec</td>
              <td id="H47.10" style={this.state.diagnosis.indexOf("H47.10") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                377.00/H47.10
              </td>
            </tr>
            <tr>
              <td>VF Defect, Arcuate</td>
              <td id="H53.43E" style={this.state.diagnosis.indexOf("H53.43E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                368.43/H53.43<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>VF Defect, Central</td>
              <td id="H53.41E" style={this.state.diagnosis.indexOf("H53.41E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                368.41/H53.41<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr className="category_tr"><td>RETINA</td><td></td></tr>
            <tr>
              <td>BRAO</td>
              <td id="H34.23E" style={this.state.diagnosis.indexOf("H34.23E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                362.32/H34.23<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>CRAO</td>
              <td id="H34.1E" style={this.state.diagnosis.indexOf("H34.1E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                362.31/H34.1<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>ChorioRet Scar, Unspec</td>
              <td id="H31.009" style={this.state.diagnosis.indexOf("H31.009") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                363.30/H31.009
              </td>
            </tr>
            <tr>
              <td>CNVM</td>
              <td id="H35.05E" style={this.state.diagnosis.indexOf("H35.05E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                362.16/H35.05<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>BDR</td>
              <td id="E11.319" style={this.state.diagnosis.indexOf("E11.319") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                362.01/E11.319
              </td>
            </tr>
            <tr>
              <td>PDR</td>
              <td id="E11.359" style={this.state.diagnosis.indexOf("E11.359") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                362.02/E11.359
              </td>
            </tr>
            <tr>
              <td>ERM</td>
              <td id="H35.37E" style={this.state.diagnosis.indexOf("H35.37E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                362.56/H35.37<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Ret/Sub Hemorrhage</td>
              <td id="H35.6E" style={this.state.diagnosis.indexOf("H35.6E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                362.81/H35.6<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>ARMD</td>
              <td id="H35.31" style={this.state.diagnosis.indexOf("H35.31") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                362.51/H35.31
              </td>
            </tr>
            <tr>
              <td>Macular drusen</td>
              <td id="H35.36E" style={this.state.diagnosis.indexOf("H35.36E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                362.57/H35.36<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Macular edema</td>
              <td id="E11.311" style={this.state.diagnosis.indexOf("E11.311") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                362.07/E11.311
              </td>
            </tr>
            <tr>
              <td>Myopia, High Deg</td>
              <td id="H44.2E" style={this.state.diagnosis.indexOf("H44.2E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                360.21/H44.2<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Periph Chor Atrophy</td>
              <td id="H31.11E" style={this.state.diagnosis.indexOf("H31.11E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                363.41/H31.11<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Periph Deg Lattice</td>
              <td id="H35.41E" style={this.state.diagnosis.indexOf("H35.41E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                362.63/H35.41<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Retinal Hole/Tear</td>
              <td id="H33.31E" style={this.state.diagnosis.indexOf("H33.31E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                361.32/H33.31<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Retinopathy HTN</td>
              <td id="H35.03E" style={this.state.diagnosis.indexOf("H35.03E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                362.11/H35.03<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>BRVO</td>
              <td id="H34.83E" style={this.state.diagnosis.indexOf("H34.83E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                362.36/H34.83<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>CRVO</td>
              <td id="H34.81E" style={this.state.diagnosis.indexOf("H34.81E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                362.35/H34.81<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Vitreous detachment</td>
              <td id="H43.81E" style={this.state.diagnosis.indexOf("H43.81E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                379.21/H43.81<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Vitreous hemorrhage</td>
              <td id="H43.1E" style={this.state.diagnosis.indexOf("H43.1E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                379.23/H43.1<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Vitreous floaters</td>
              <td id="H43.39E" style={this.state.diagnosis.indexOf("H43.39E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                379.24/H43.39<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr className="category_tr"><td>SYMPTOMS</td><td></td></tr>
            <tr>
              <td>Asthenopia</td>
              <td id="H53.14E" style={this.state.diagnosis.indexOf("H53.14E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                368.13/H53.14<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Epiphora</td>
              <td id="H04.20E" style={this.state.diagnosis.indexOf("H04.20E") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                375.20/H04.20<input type="text" placeholder="E" style={{ width: "10px", textAlign: "center", padding: 0, border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Visual Loss</td>
              <td id="H54.2" style={this.state.diagnosis.indexOf("H54.2") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                369.20/H54.2
              </td>
            </tr>
            <tr>
              <td>Photopsia</td>
              <td id="H53.19" style={this.state.diagnosis.indexOf("H53.19") != -1 ? this.state.service_style : undefined} onClick={this.onClickDiagnosis} className="service_and_icd_tr">
                368.15/H53.19
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
} 

class Col2 extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="body_col2">
      </div>
    );
  }
}