// ASCII conversion functionality
document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('input-text');
    const outputType = document.getElementById('output-type');
    const convertBtn = document.getElementById('convert-btn');
    const conversionResult = document.getElementById('conversion-result');
    
    function convertToASCII() {
        const text = inputText.value;
        const type = outputType.value;
        let result = '';
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const code = char.charCodeAt(0);
            
            if (i > 0) result += ', ';
            
            switch(type) {
                case 'decimal':
                    result += `${char} = ${code}`;
                    break;
                case 'hex':
                    result += `${char} = 0x${code.toString(16).toUpperCase()}`;
                    break;
                case 'binary':
                    result += `${char} = ${code.toString(2).padStart(8, '0')}`;
                    break;
            }
        }
        
        conversionResult.textContent = result;
    }
    
    convertBtn.addEventListener('click', convertToASCII);
    
    // Initial conversion
    convertToASCII();
});