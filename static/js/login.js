document.getElementById('phone').addEventListener('input', function(e) {
    const input = e.target;
    let value = input.value.replace(/\D/g, ''); // Remove non-digit characters

    // Apply formatting
    if (value.length > 3 && value.length <= 6) {
        value = value.slice(0, 3) + ' - ' + value.slice(3);
    } else if (value.length > 6) {
        value = value.slice(0, 3) + ' - ' + value.slice(3, 6) + ' - ' + value.slice(6, 10);
    }

    // Set the formatted value back to the input
    input.value = value;
});

function togglePasswordVisibility(id) {
    const input = document.getElementById(id);
    const eyeIcon = document.getElementById('toggle-password');
    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

document.getElementById('country-code-btn').addEventListener('click', function() {
    const dropdown = document.getElementById('country-code-dropdown');
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    }
});

function selectCountry(code, flagUrl) {
    document.getElementById('country-code-text').innerText = code;
    document.getElementById('country-flag').src = flagUrl;
    document.getElementById('country-code-dropdown').style.display = 'none';
}

function setupCountryOptions() {
    const countryOptions = [
        { code: '+93', name: 'Afghanistan', flagUrl: 'https://flagcdn.com/af.svg' },
        { code: '+355', name: 'Albania', flagUrl: 'https://flagcdn.com/al.svg' },
        { code: '+213', name: 'Algeria', flagUrl: 'https://flagcdn.com/dz.svg' },
        { code: '+376', name: 'Andorra', flagUrl: 'https://flagcdn.com/ad.svg' },
        { code: '+244', name: 'Angola', flagUrl: 'https://flagcdn.com/ao.svg' },
        { code: '+1', name: 'United States', flagUrl: 'https://flagcdn.com/us.svg' },
        { code: '+54', name: 'Argentina', flagUrl: 'https://flagcdn.com/ar.svg' },
        { code: '+43', name: 'Austria', flagUrl: 'https://flagcdn.com/at.svg' },
        { code: '+61', name: 'Australia', flagUrl: 'https://flagcdn.com/au.svg' },
        { code: '+32', name: 'Belgium', flagUrl: 'https://flagcdn.com/be.svg' },
        { code: '+55', name: 'Brazil', flagUrl: 'https://flagcdn.com/br.svg' },
        { code: '+359', name: 'Bulgaria', flagUrl: 'https://flagcdn.com/bg.svg' },
        { code: '+225', name: 'Ivory Coast', flagUrl: 'https://flagcdn.com/ci.svg' },
        { code: '+86', name: 'China', flagUrl: 'https://flagcdn.com/cn.svg' },
        { code: '+57', name: 'Colombia', flagUrl: 'https://flagcdn.com/co.svg' },
        { code: '+506', name: 'Costa Rica', flagUrl: 'https://flagcdn.com/cr.svg' },
        { code: '+385', name: 'Croatia', flagUrl: 'https://flagcdn.com/hr.svg' },
        { code: '+42', name: 'Czech Republic', flagUrl: 'https://flagcdn.com/cz.svg' },
        { code: '+45', name: 'Denmark', flagUrl: 'https://flagcdn.com/dk.svg' },
        { code: '+249', name: 'Sudan', flagUrl: 'https://flagcdn.com/sd.svg' },
        { code: '+20', name: 'Egypt', flagUrl: 'https://flagcdn.com/eg.svg' }
    ];

    const dropdown = document.getElementById('country-code-dropdown');
    const searchInput = document.createElement('input');
    searchInput.id = 'country-search';
    searchInput.placeholder = 'Search country';
    searchInput.style.width = '100%';
    searchInput.style.padding = '12px 12px';
    searchInput.style.boxSizing = 'border-box';
    searchInput.style.background = 'black';
    searchInput.style.border = '1px solid white';
    searchInput.style.color = 'white';
    searchInput.style.position = 'sticky';
    searchInput.style.top = '0';
    searchInput.style.fontSize = '17px'
    searchInput.style.outline = 'none';
    searchInput.style.zIndex = '1001'; // Ensure it stays on top
    dropdown.appendChild(searchInput);

    function filterOptions(query) {
        return countryOptions.filter(option => 
            option.name.toLowerCase().includes(query.toLowerCase()) ||
            option.code.includes(query)
        );
    }

    function renderOptions(options) {
        dropdown.innerHTML = '';
        dropdown.appendChild(searchInput); // Re-add the search input
        options.forEach(option => {
            const div = document.createElement('div');
            div.style.padding = '10px'; // Increased padding
            div.style.cursor = 'pointer';
            div.style.display = 'flex';
            div.style.alignItems = 'center';
            div.style.color = 'white';
            div.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
            div.innerHTML = `
                <img src="${option.flagUrl}" style="width: 24px; height: 24px; margin-right: 10px;" alt="Flag"> 
                ${option.name} 
                <span style="margin-left: auto;">${option.code}</span>
            `;
            div.addEventListener('click', () => selectCountry(option.code, option.flagUrl));
            dropdown.appendChild(div);
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        const filteredOptions = filterOptions(query);
        renderOptions(filteredOptions);
    });

    renderOptions(countryOptions); // Render all options initially
}

window.onload = setupCountryOptions;