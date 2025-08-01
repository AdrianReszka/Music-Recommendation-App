import React from 'react';
import LoginWithSpotifyButton from '../components/LoginWithSpotifyButton';

export default function LandingPage({ onSpotifyLogin }) {
    return (
        <main className="w-screen h-screen flex flex-col justify-center items-center bg-[#1f1f1f] text-white text-center px-4">

            <h1 className="text-7xl sm:text-8xl font-extrabold mb-10">
                BeatBridge
            </h1>

            <p className="text-gray-300 text-2xl sm:text-3xl mb-14">
                Bridge your Last.fm loved tracks to Spotify playlists.
            </p>

            <LoginWithSpotifyButton onClick={onSpotifyLogin} />

            <p className="mt-10 text-base sm:text-lg text-gray-500">
                We only ask for the scopes needed to create your playlist.
            </p>

            <p className="mt-12 text-sm text-gray-600">
                © {new Date().getFullYear()} BeatBridge
            </p>
        </main>
    );
}
