RegisterNetEvent('showJoinNotification')
AddEventHandler('showJoinNotification', function(playerName)
    SendNUIMessage({
        type = 'showNotification',
        notificationType = 'join',
        playerName = playerName
    })
end)

RegisterNetEvent('showLeaveNotification')
AddEventHandler('showLeaveNotification', function(playerName)
    SendNUIMessage({
        type = 'showNotification',
        notificationType = 'leave',
        playerName = playerName
    })
end)