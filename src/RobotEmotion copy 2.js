import { html, css, LitElement } from 'lit';

export class RobotEmotion extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      .myfilter{
        height: 40px;
        width:40px;
        margin-top:-40px;
        margin-left:-44px;
        __transition: 5s;
        animation: mymove 1s infinite;  
        animation-timing-function: steps(8);              
      } 
       
      @keyframes mymove{
          0% {
            transform: translateX(1px) rotateZ(0deg);
          }        
          100% {
            transform: translateY(1px) rotateZ(360deg);
          }
      }

      .borderfilter{
        height: 40px;
        width:40px;
        margin-top:-40px;
        margin-left:-44px;
        animation: mymove2 0.5s infinite;  
        animation-timing-function: steps(4);              
      } 
       
      @keyframes mymove2{
          0% {
            transform: rotateZ(00deg);
          }        
          100% {
            transform:  rotateZ(360deg);
          }
      }

    `;
  }

  static get properties() {
    return {
      emotion: String,
      matchingblink: String,
      blink: Boolean,
    };
  }

  constructor() {
    super();
    this.blink = false;
    this.emotion = "blink";
    this.matchingblink = "blink";
    this._timer = setTimeout(() => { this._showEmotion(); }, 500);
  }

  updated() {
    //this._showEmotion();
  }

  _showEmotion() {
    this.blink = false;
    this.shadowRoot.getElementById(this.matchingblink).hidden = !this.blink;
    this.shadowRoot.getElementById(this.emotion).hidden = this.blink;
    const minimumWait = 3000;
    const maximumWait = 5500;    
    let wait = Math.random() * (maximumWait - minimumWait) + minimumWait;
    this._timer = setTimeout(() => { this._showBlink(); }, wait);   
    this.render();
  }

  _showBlink() {
    this.blink = true;
    this.shadowRoot.getElementById(this.matchingblink).hidden = !this.blink;
    this.shadowRoot.getElementById(this.emotion).hidden = this.blink;
    this._timer = setTimeout(() => { this. _showEmotion(); }, 100);  
    this.render();
  }

  render() {
    return html`
    <div id="happy" hidden>
      <svg class="myface" width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
      d="M15.1604 0.0306702H4.83963C2.18372 0.0306702 0.0306702 2.18371 0.0306702 4.83963V15.1604C0.0306702 17.8163 2.18372 19.9693 4.83963 19.9693H15.1604C17.8163 19.9693 19.9693 17.8163 19.9693 15.1604V4.83963C19.9693 2.18371 17.8163 0.0306702 15.1604 0.0306702Z"
      fill="#00000F" stroke="black" stroke-width="0.0613368" />
      <path
      d="M6.51333 4.30342H8.98325C9.54709 4.30342 10.0042 4.7605 10.0042 5.32434V7.96015C10.0042 8.52398 9.54709 8.98106 8.98325 8.98106H6.51333C5.94949 8.98106 5.49241 8.52398 5.49241 7.96015V5.32434C5.49241 4.7605 5.94949 4.30342 6.51333 4.30342Z"
      fill="white" />
      <path
      d="M11.1552 4.63793H13.6107C14.1181 4.63793 14.5295 5.04926 14.5295 5.55667V7.92869C14.5295 8.43609 14.1181 8.84743 13.6107 8.84743H11.1552C10.6478 8.84743 10.2365 8.43609 10.2365 7.92869V5.55667C10.2365 5.04926 10.6478 4.63793 11.1552 4.63793Z"
      fill="white" />
    </svg>   
    <img class="myfilter tranparentClass" src="./randompixels4.png">
    <img class="myfilter tranparentClass" src="./randompixels4white.png">
    <img class="borderfilter tranparentClass" src="./randompixelsborder.png">
    </div>
    
    <div id="blink" hidden>
      <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.1604 0.0306702H4.83962C2.1837 0.0306702 0.0306625 2.18371 0.0306625 4.83962V15.1604C0.0306625 17.8163 2.1837 19.9693 4.83962 19.9693H15.1604C17.8163 19.9693 19.9693 17.8163 19.9693 15.1604V4.83962C19.9693 2.18371 17.8163 0.0306702 15.1604 0.0306702Z"
          fill="#00000F" stroke="black" stroke-width="0.0613368" />
        <path
          d="M8.3607 7.10951H3.86657C2.93791 7.10951 2.18509 7.23577 2.18509 7.39152V8.11962C2.18509 8.27537 2.93791 8.40163 3.86657 8.40163H8.3607C9.28935 8.40163 10.0422 8.27537 10.0422 8.11962V7.39152C10.0422 7.23577 9.28935 7.10951 8.3607 7.10951Z"
          fill="white" />
        <path
          d="M16.062 7.10951H11.8027C10.8304 7.10951 10.0422 7.23519 10.0422 7.39023V8.11498C10.0422 8.27002 10.8304 8.3957 11.8027 8.3957H16.062C17.0343 8.3957 17.8226 8.27002 17.8226 8.11498V7.39023C17.8226 7.23519 17.0343 7.10951 16.062 7.10951Z"
          fill="white" />
      </svg>
      <img class="myfilter" src="./randompixels4.png">
      <img class="myfilter tranparentClass" src="./randompixels4white.png">
      <img class="borderfilter tranparentClass" src="./randompixelsborder.png">
    </div>
  
    <div id="sad" hidden>
      <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.1604 0.0306702H4.83962C2.18371 0.0306702 0.0306702 2.18371 0.0306702 4.83962V15.1604C0.0306702 17.8163 2.18371 19.9693 4.83962 19.9693H15.1604C17.8163 19.9693 19.9693 17.8163 19.9693 15.1604V4.83962C19.9693 2.18371 17.8163 0.0306702 15.1604 0.0306702Z"
          fill="#00000F" stroke="black" stroke-width="0.0613368" />
        <path
          d="M8.04745 10.2571C8.04745 10.2571 9.56272 9.54312 9.56272 9.74372V10.887C9.56272 11.0876 9.39191 11.9032 8.73069 11.916L6.58511 11.9577C5.9239 11.9706 5.07857 10.909 5.2708 10.887L6.15499 10.7859C7.06869 10.6924 8.04745 10.2571 8.04745 10.2571V10.2571Z"
          fill="white" />
        <path
          d="M11.9525 10.2057C11.9525 10.2057 10.4373 9.49181 10.4373 9.6924V10.8357C10.4373 11.0363 10.6081 11.8519 11.2693 11.8647L13.4149 11.9064C14.0761 11.9193 14.9214 10.8576 14.7292 10.8357L13.845 10.7346C12.9313 10.6411 11.9525 10.2057 11.9525 10.2057V10.2057Z"
          fill="white" />
      </svg>
      <img class="myfilter tranparentClass" src="./randompixels4.png">
      <img class="myfilter tranparentClass" src="./randompixels4white.png">
      <img class="borderfilter tranparentClass" src="./randompixelsborder.png">
    </div>
    
    <div id="blinklow" hidden>
      <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.1604 0.0306702H4.83962C2.18371 0.0306702 0.0306702 2.18372 0.0306702 4.83963V15.1604C0.0306702 17.8163 2.18371 19.9693 4.83962 19.9693H15.1604C17.8163 19.9693 19.9693 17.8163 19.9693 15.1604V4.83963C19.9693 2.18372 17.8163 0.0306702 15.1604 0.0306702Z"
          fill="#00000F" stroke="black" stroke-width="0.0613368" />
        <path
          d="M8.36071 9.75537H3.86658C2.93793 9.75537 2.1851 9.88163 2.1851 10.0374V10.7655C2.1851 10.9212 2.93793 11.0475 3.86658 11.0475H8.36071C9.28937 11.0475 10.0422 10.9212 10.0422 10.7655V10.0374C10.0422 9.88163 9.28937 9.75537 8.36071 9.75537Z"
          fill="white" />
        <path
          d="M16.062 9.75537H11.8027C10.8304 9.75537 10.0422 9.88105 10.0422 10.0361V10.7608C10.0422 10.9159 10.8304 11.0416 11.8027 11.0416H16.062C17.0344 11.0416 17.8226 10.9159 17.8226 10.7608V10.0361C17.8226 9.88105 17.0344 9.75537 16.062 9.75537Z"
          fill="white" />
      </svg>
      <img class="myfilter tranparentClass" src="./randompixels4.png">
      <img class="myfilter tranparentClass" src="./randompixels4white.png">
      <img class="borderfilter tranparentClass" src="./randompixelsborder.png">
    </div>
    
    <div id="angry" hidden>
      <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.1604 0.0306702H4.83962C2.18371 0.0306702 0.0306702 2.18371 0.0306702 4.83962V15.1604C0.0306702 17.8163 2.18371 19.9693 4.83962 19.9693H15.1604C17.8163 19.9693 19.9693 17.8163 19.9693 15.1604V4.83962C19.9693 2.18371 17.8163 0.0306702 15.1604 0.0306702Z"
          fill="#00000F" stroke="black" stroke-width="0.0613368" />
        <path
          d="M7.24625 6.48068C7.24625 6.48068 8.39402 6.94356 9.4631 7.50415L9.42969 8.71422C9.42969 8.71422 9.25889 8.72818 8.59767 8.74103L6.45209 8.78272C5.79087 8.79556 5.10437 8.74763 5.10437 8.74763L5.01971 5.53953L7.24626 6.48068H7.24625Z"
          fill="white" />
        <path
          d="M12.6785 6.33377C12.6785 6.33377 11.4984 6.83047 10.3992 7.432L10.4336 8.73048C10.4336 8.73048 10.6092 8.74546 11.289 8.75925L13.495 8.80398C14.1749 8.81776 14.8807 8.76633 14.8807 8.76633L14.9678 5.32387L12.6785 6.33377H12.6785Z"
          fill="white" />
      </svg>
    </div>

    

`;
  }
}
