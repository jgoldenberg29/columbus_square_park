json.event do
    json.extract! @event, :name, :description, :date, :organizer, :location
end