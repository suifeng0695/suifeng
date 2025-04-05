function Header() {
    try {
        return (
            <header className="px-4 py-8 md:py-12" data-name="header">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 title-gradient" data-name="main-title">
                        Monster Survivors
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed" data-name="game-description">
                        Embark on an epic journey of survival as you battle through endless waves of challenging monsters in this thrilling action-packed adventure!
                    </p>
                    <div className="flex justify-center gap-4" data-name="game-stats">
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-blue-600">1M+</span>
                            <span className="text-gray-600">Players</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-blue-600">4.8/5</span>
                            <span className="text-gray-600">Rating</span>
                        </div>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
