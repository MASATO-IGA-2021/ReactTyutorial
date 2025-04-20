import './EventPropagation.css';

export default function EventPropagation() {
const handleParent = () => alert('#parent RUN');
const handleMy = () => alert('#my RUN');
const handleChild = () => alert('#child RUN');

return (
    <div id='parent' onClick={handleParent}>
        親要素
        <div id='my' onClick={handleMy}>
            現在要素
        <div id='child' onClick={handleChild}>
            子要素
            </div>
        </div>
    </div>
    
)
}