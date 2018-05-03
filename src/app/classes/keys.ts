import {Key} from './key';

export class Keys {

    public static createKeys(): Array<Key> {
        let keys: Array<Key>;
        keys = [];
        for (let i = 65; i <= 90; i++) {
            keys.push(new Key(i));
        }
        const polishKeys: Array<string> = ['Ą', 'Ę', 'Ś', 'Ż', 'Ź', 'Ó', 'Ł', 'Ć', 'Ń'];

        for (const item of polishKeys) {
            keys.push(new Key(item.charCodeAt(0)));
        }
        return keys;
    }



}


