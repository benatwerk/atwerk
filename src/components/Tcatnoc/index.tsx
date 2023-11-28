import styles from "./Tcatnoc.module.scss";

/** 
 * run this to create the cipher
 * 
function cipher(text, shift) => {
    function shiftChar(char, shift) => {
        // Shift letters
        if (char.match(/[a-zA-Z]/)) {
            const baseCode =
                char.charCodeAt(0) < "a".charCodeAt(0)
                    ? "A".charCodeAt(0)
                    : "a".charCodeAt(0);
            return String.fromCharCode(
                ((char.charCodeAt(0) - baseCode + shift) % 26) + baseCode
            );
        }
        // Shift numbers
        if (char.match(/[0-9]/)) {
            return String.fromCharCode(
                ((char.charCodeAt(0) - "0".charCodeAt(0) + shift) % 10) +
                    "0".charCodeAt(0)
            );
        }
        return char;
    }
    return text
        .split("")
        .map((char) => shiftChar(char, shift))
        .join("");
}
*/

function decipher(text: string, shift: number): string {
    return text
        .split("")
        .map((char) => {
            if (char.match(/[a-zA-Z]/)) {
                const code = char.charCodeAt(0);
                if (code >= 65 && code <= 90) {
                    return String.fromCharCode(
                        ((code - 65 + 26 - shift) % 26) + 65
                    );
                } else if (code >= 97 && code <= 122) {
                    return String.fromCharCode(
                        ((code - 97 + 26 - shift) % 26) + 97
                    );
                }
            }
            if (char.match(/[0-9]/)) {
                return String.fromCharCode(
                    ((char.charCodeAt(0) - 48 + 10 - shift) % 10) + 48
                );
            }
            return char;
        })
        .join("");
}

// Hide number from the bots
function Tcatnoc() {
    function formatP(p: string) {
        const f = p.replace(/(\d{3})(\d{3})(\d{4})/, ")$1( $2-$3");
        const r = f.split("").reverse().join("");
        return r;
    }

    const p = decipher(formatP(import.meta.env.VITE_P), 2);
    return (
        <>
            <strong className={styles.p}>{p}</strong>
        </>
    );
}

export default Tcatnoc;
