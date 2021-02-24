import Roact from '@rbxts/roact';
import { Players } from '@rbxts/services';
import DataStore2 from '@rbxts/datastore2';
import { mainUI } from 'shared/ui-components/main-ui';
import Remotes from 'shared/remotes';

Players.PlayerAdded.Connect((player: Player) => {
    print('test')
    const moneyStore = DataStore2('money', player);

    const leaderStats = new Instance('Folder');
    leaderStats.Name = 'leaderstats';
    leaderStats.Parent = player;
    
    const money = new Instance('NumberValue');
    money.Name = 'Money';
    money.Value = moneyStore.Get(100) as number;
    money.Parent = leaderStats;

    moneyStore.OnUpdate(function(newValue) {
        money.Value = newValue as number;
    });
});