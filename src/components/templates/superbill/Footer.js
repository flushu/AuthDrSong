import React from 'react';

export default () => (
  <div id="footer">
    <Col1 />
    <Col2 />
    <Col3 />
  </div>
);

const Col1 = () => (
  <div id="footer_col1">
    <div>Ins: <span className="clickable">Medicare</span> <span className="clickable">MediCal</span> PPO <input id="ppo_input" type="text" /> HMO <input id="hmo_input" type="text"/> <span className="clickable">None</span></div>
    <div>Auth#: <input id="auth_input" type="text" /></div>
  </div>
);

const Col2 = () => (
  <div id="footer_col2">
    <div id="next_visit_estimate_date_input">
      <div className="margin_right_little">
        <b>A Song:</b> <input type="text" />d <input type="text" />wk <input type="text" />mo -> <span>fu</span> <span>po</span> <span>Sx</span> <span>In-Sx</span>
      </div>
      <div className="margin_right_little">
        <b>J Song:</b> <input type="text" />d <input type="text" />wk <input type="text" />mo -> <span>fu</span> <span>po</span> <span>Sx</span> <span>In-Sx</span>
      </div>
    </div>
    <div>
      <span className="clickable">mRx</span> <span className="clickable">cRx</span> <span className="clickable">prisms</span> <span className="clickable">gonio</span> <span className="clickable">dil</span> <span className="clickable">HRT</span> <span className="clickable">OCT-(NFL/Macula/Angle)</span> <span className="clickable">CCT</span> <span className="clickable">VF 24-2</span> <span className="clickable">T/U</span> <span className="clickable">IOLMaster</span> <span className="clickable">A-scan</span> <span className="clickable">SLT</span> <span className="clickable">LPI</span> <span className="clickable">IPL</span>
    </div>
    <div id="next_visit_auth_input">
      Auth: A <input type="text" /> J <input type="text" />
    </div>
    <div id="next_visit_misc_input">
      <input type="checkbox"/> Dict
      <input type="checkbox"/> Backfill
      <input type="checkbox"/> Billing posted
      <input type="checkbox"/> Sx packet
      <input type="checkbox"/> Sx Log
      <input type="checkbox"/> Scan Sx
      <input type="checkbox"/> eRX
    </div>
  </div>
);

const Col3 = () => (
  <div id="footer_col3">
    <div className="group">
      <div><b>Today's Charges: $</b><input type="text" /></div>
      <div><b>Cash/CC/Chck: $</b><input type="text" /></div>
      <div><input type="checkbox" /> Receipt</div>
    </div>
  </div>
);