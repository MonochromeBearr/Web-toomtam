export default function RegistrationForm() {
  return (
    <div className="registration-container">
      <div className="form-wrapper">
        <h1 className="form-title">ลงทะเบียนบัญชี</h1>

        <p className="form-subtitle">
          เพื่อให้บัญชีของท่านสมบูรณ์ในการบันทึกข้อมูลรูปแบบการจอง
          กรุณากรอกข้อมูลด้านล่างให้ครบถ้วน
        </p>

        <form className="form-content">
          <div className="form-group">
            <label>
              คำนำหน้า <span className="required">*</span>
            </label>
            <select className="form-select">
              <option>โปรดเลือกคำนำหน้า</option>
              <option>นาย</option>
              <option>นาง</option>
              <option>นางสาว</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              ชื่อ <span className="required">*</span>
            </label>
            <input
              className="form-input"
              type="text"
              placeholder="ชื่อของคุณ"
            />
          </div>

          <div className="form-group">
            <label>
              นามสกุล <span className="required">*</span>
            </label>
            <input
              className="form-input"
              type="text"
              placeholder="นามสกุลของคุณ"
            />
          </div>

          <div className="form-group">
            <label>
              เบอร์ติดต่อ <span className="required">*</span>
            </label>
            <input
              className="form-input"
              type="tel"
              placeholder="0XX-XXXX-XXX"
            />
          </div>

          <div className="form-group">
            <label>
              คณะ <span className="required">*</span>
            </label>
            <select className="form-select">
              <option>ยังไม่ได้เลือกคณะใด</option>
              <option>คณะเกษตรศาสตร์</option>
              <option>คณะเทคโนโลยี</option>
              <option>คณะวิศวกรรมศาสตร์</option>
              <option>คณะวิทยาศาสตร์</option>
              <option>คณะสถาปัตยกรรมศาสตร์</option>
              <option>วิทยาลัยการคอมพิวเตอร์</option>
              <option>คณะพยาบาลศาสตร์</option>
              <option>คณะแพทยศาสตร์</option>
              <option>คณะเทคนิคการแพทย์</option>
              <option>คณะสาธารณสุขศาสตร์</option>
              <option>คณะทันตแพทยศาสตร์</option>
              <option>คณะเภสัชศาสตร์</option>
              <option>คณะสัตวแพทยศาสตร์</option>
              <option>คณะศึกษาศาสตร์</option>
              <option>คณะมนุษยศาสตร์และสังคมศาสตร์</option>
              <option>คณะบริหารธุรกิจและการบัญชี</option>
              <option>คณะศิลปกรรมศาสตร์</option>
              <option>คณะเศรษฐศาสตร์</option>
              <option>คณะนิติศาสตร์</option>
              <option>วิทยาลัยการปกครองท้องถิ่น</option>
              <option>วิทยาลัยนานาชาติ</option>
              <option>บุคคลภายนอก</option>

            </select>
          </div>

          <button type="submit" className="submit-button">
            ยืนยัน
          </button>
        </form>
      </div>

      <div className="footer-gradient" />
    </div>
  );
}