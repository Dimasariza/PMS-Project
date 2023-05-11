<?php

namespace App\Models;

use App\Models\Ship;
use App\Enums\JobType;
use App\Models\Department;
use App\Models\TypingSystem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class JobList extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'job_type' => JobType::class,
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'department_id',
        'ship_id',
        'typing_system_id',
        'component_name',
        'component_code',
        'part_name',
        'job_type',
        'job_name',
        'approved_job',
        'person_in_charge',
        'status',
        'level',
    ];

    /**
     * One job belongs to one department
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class, 'department_id')->withTrashed();
    }

    /**
     * One job belongs to one ship
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function ship(): BelongsTo
    {
        return $this->belongsTo(Ship::class, 'ship_id')->withTrashed();
    }

    /**
     * One job belongs to one typing system
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function typingSystem(): BelongsTo
    {
        return $this->belongsTo(TypingSystem::class, 'ship_id')->withTrashed();
    }
}
