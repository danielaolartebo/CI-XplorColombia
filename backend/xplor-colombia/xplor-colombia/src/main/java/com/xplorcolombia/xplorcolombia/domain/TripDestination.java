package com.xplorcolombia.xplorcolombia.domain;

import com.xplorcolombia.xplorcolombia.dto.CustomerDTO;
import com.xplorcolombia.xplorcolombia.dto.TripDestinationDTO;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@NamedNativeQueries({
        @NamedNativeQuery(name="TripDestin.seeTripDestPerClient",
                query="",
                resultSetMapping = "seeTripDestPerClient")
})

@SqlResultSetMappings({
        @SqlResultSetMapping(name="seeTripDestPerClient",
                classes = {@ConstructorResult(targetClass = TripDestinationDTO.class,
                        columns = {
                                @ColumnResult(name = "id", type = Integer.class)
                        }
                )
                })
})


@Data
@Entity
@Table(name = "trip_destination")
public class TripDestination implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "trip_id", nullable = false)
    private Trip trip;

    @ManyToOne
    @JoinColumn(name = "destination_id", nullable = false)
    private Destination destination;

    @Column(name = "start_date", nullable = false)
    private Date startDate;

    @Column(name = "end_date", nullable = false)
    private Date endDate;

    @Column(name = "num_people", nullable = false)
    private int numPeople;

    @ManyToOne
    @JoinColumn(name = "trasnportation_id", nullable = false)
    private Transportation trasnportation;

    @ManyToOne
    @JoinColumn(name = "accommodation_id", nullable = false)
    private Accommodation accommodation;

    @ManyToOne
    @JoinColumn(name = "meals_id", nullable = false)
    private Meals meals;

    @ManyToOne
    @JoinColumn(name = "trip_insurance_id", nullable = false)
    private TripInsurance tripInsurance;

    @Column(name = "both_transportation", nullable = false)
    private boolean bothTransportation;



}
