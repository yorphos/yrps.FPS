import Net from "@rbxts/net";

const Remotes = Net.Definitions.Create({
    setWeapon: Net.Definitions.Event<[weaponID: string, loadoutID: string]>()
});

export default Remotes;