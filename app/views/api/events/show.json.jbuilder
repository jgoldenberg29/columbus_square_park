json.event do
    json.extract! @event, :name, :description, :date, :location, :id
end