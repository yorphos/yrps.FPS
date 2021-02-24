import DataStore2 from '@rbxts/datastore2';
import { Workspace } from '@rbxts/services';

const floorClickDetector = Workspace.FindFirstChild('Floor')?.FindFirstChild('ClickDetector') as ClickDetector;

floorClickDetector.MouseClick.Connect(function(player: Player) {
    const moneyStore = DataStore2('money', player)
    moneyStore.Increment(1);
})