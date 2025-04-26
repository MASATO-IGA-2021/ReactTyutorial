import { useState } from 'react'
import { createPortal } from 'react-dom'
import './PortalBasic.css';

export default function PortalBasic() {
    //ダイアログの開閉状態を管理するstatus
    const [dialogStatus, setDialogStatus] = useState(false);
    const handleClick = () =>  setDialogStatus(dialogStatus => !dialogStatus);
    
    return (
        <form>
            <button type='button' onClick={handleClick} disabled={dialogStatus}>ダイアログ</button>
            {dialogStatus && createPortal(
                <div className='dialog'>
                    <p>Portalで生成されたダイアログ</p>
                    <button type='button' onClick={handleClick}>閉じる</button>
                </div>,
                document.getElementById('dialog')
            )}
        </form>
    )
}