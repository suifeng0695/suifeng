function GameDescription() {
    try {
        return (
            <section className="px-4 py-12 max-w-4xl mx-auto" data-name="description-section">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800" data-name="gameplay-title">
                        Epic Survival Adventure
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed" data-name="gameplay-description">
                        Monster Survivors challenges you to survive in a world overrun by monsters. Use strategic thinking and quick reflexes to defeat waves of enemies, collect power-ups, and become stronger with each battle. Every game session offers a unique experience with procedurally generated challenges.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800" data-name="mechanics-title">
                        Game Mechanics
                    </h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-3 mb-8" data-name="mechanics-list">
                        <li>Dynamic difficulty scaling based on survival time</li>
                        <li>Multiple character classes with unique abilities</li>
                        <li>Diverse enemy types with different attack patterns</li>
                        <li>Strategic power-up system</li>
                        <li>Real-time combat mechanics</li>
                    </ul>

                    <div className="bg-blue-50 p-6 rounded-xl" data-name="pro-tips">
                        <h2 className="text-xl font-bold mb-4 text-blue-800">Pro Tips</h2>
                        <ul className="space-y-2 text-blue-700">
                            <li>Collect experience orbs to level up quickly</li>
                            <li>Keep moving to avoid being surrounded</li>
                            <li>Choose upgrades that complement your playstyle</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('GameDescription component error:', error);
        reportError(error);
        return null;
    }
}
