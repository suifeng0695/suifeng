function GameFrame() {
    try {
        return (
            <section className="game-container px-4 py-8" data-name="game-section">
                <div className="max-w-4xl mx-auto">
                    <div className="game-frame" data-name="game-frame-container">
                        <iframe 
                            src="https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
                            className="w-full aspect-[16/9]"
                            frameBorder="0"
                            allowFullScreen
                            title="Monster Survivors Game"
                            data-name="game-iframe"
                        ></iframe>
                    </div>
                    <p className="text-center mt-4 text-gray-500 text-sm" data-name="game-notice">
                        Game loads in a few seconds. Click to play!
                    </p>
                </div>
            </section>
        );
    } catch (error) {
        console.error('GameFrame component error:', error);
        reportError(error);
        return null;
    }
}
