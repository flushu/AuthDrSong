import React from 'react';

export default () => (
  <div id="backpage">
    <div className="title">Back-Office Flow</div>
    <div>
      <input type="checkbox" /> W/u
    </div>
    <div>
      <input type="checkbox" /> Mrx
    </div>
    <div id="backpage_erx">
      <div><input type="checkbox" /> eRx</div><div id="backpage_erx_extra"><input type="checkbox" /> Retinoscope <input type="checkbox" /> Prisms</div>
    </div>
    <div>
      <input type="checkbox" /> VF 24-2 OU OD OS
    </div>
    <div>
      <input type="checkbox" /> OCT
    </div>
    <div>
      <input type="checkbox" /> CCT
    </div>
    <div>
      <input type="checkbox" /> gonio
    </div>
    <div id="backpage_dfe">
      <div><input type="checkbox" /> DFE -> Time <input type="text" /></div><div id="backpage_dfe_extra"><input type="checkbox" />Scleral depression <input type="checkbox" /> Rev-eyes</div>
    </div>
    <div>
      <input type="checkbox" /> Ta
    </div>
    <div>
      <input type="checkbox" /> Photos
    </div>
    <div>
      <input type="checkbox" /> Ta after dilation
    </div>
    <div>
      <input type="checkbox" /> <input type="text" /> Laser Ready @ <input type="text" /> IOP Check Ready @ <input type="text" />
    </div>
    <textarea cols={100} rows={55} />
  </div>
);