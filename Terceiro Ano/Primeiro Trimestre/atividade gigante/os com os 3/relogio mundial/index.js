function updateClock() {
    const timeZones = [
        { city: 'Nova York', offset: -5 },
        { city: 'Londres', offset: 0 },
        { city: 'Tóquio', offset: 9 }
    ];

    const currentTime = new Date();

    timeZones.forEach(zone => {
        const clockElement = document.getElementById(`clock-${zone.city.toLowerCase().replace(' ', '-')}`);
        const timeZoneOffset = zone.offset * 60 * 60 * 1000;
        const timeZoneTime = new Date(currentTime.getTime() + timeZoneOffset);

        const hours = timeZoneTime.getHours().toString().padStart(2, '0');
        const minutes = timeZoneTime.getMinutes().toString().padStart(2, '0');
        const seconds = timeZoneTime.getSeconds().toString().padStart(2, '0');

        clockElement.textContent = `${zone.city}: ${hours}:${minutes}:${seconds}`;
    });
}
setInterval(updateClock, 1000);
updateClock();