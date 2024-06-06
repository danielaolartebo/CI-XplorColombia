package com.xplorcolombia.xplorcolombia.domain;

import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;
import com.xplorcolombia.xplorcolombia.dto.TripDTO;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@NamedNativeQueries({
        @NamedNativeQuery(name="Trip.seeTripPerClient",
                query="",
                resultSetMapping = "seeTripPerClient"),
        @NamedNativeQuery(name="Trip.seeTripPerPackage",
                query="",
                resultSetMapping = "seeTripPerPackage")

})

@SqlResultSetMappings({
        @SqlResultSetMapping(name="seeTripPerClient",
                classes = {@ConstructorResult(targetClass = TripDTO.class,
                        columns = {
                                @ColumnResult(name = "id", type = Integer.class),
                                @ColumnResult(name = "num_people", type = String.class)
                        }
                )
                }),
        @SqlResultSetMapping(name="seeTripPerPackage",
                classes = {@ConstructorResult(targetClass = TripDTO.class,
                        columns = {
                                @ColumnResult(name = "id", type = Integer.class),
                        }
                )
                })
})

@Data
@Entity
@Table(name = "trip")
public class Trip implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column(name = "num_people", nullable = false)
    private int numPeople;

    @ManyToOne
    @JoinColumn(name = "package_id")
    private Package tripPackage;

    @Column(name = "state", columnDefinition = "varchar(1)")
    private String state;

    @Column(name = "start_trip_date", nullable = false)
    private Date startTripDate;

    @Column(name = "end_trip_date", nullable = false)
    private Date endTripDate;

}