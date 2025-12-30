AddEventHandler('playerConnecting', function(name, setKickReason, deferrals)
    local playerName = name
    deferrals.defer()
    
    Wait(0)
    
    deferrals.done()
    
    TriggerClientEvent('showJoinNotification', -1, playerName)
end)

AddEventHandler('playerDropped', function(reason)
    local playerName = GetPlayerName(source)
    TriggerClientEvent('showLeaveNotification', -1, playerName)
end)