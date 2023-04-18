<?php

use App\Models\Department;
use App\Models\Ship;
use App\Models\TypingSystem;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('job_lists', function (Blueprint $table) {
            $table->foreignIdFor(Department::class)->constrained();
            $table->foreignIdFor(Ship::class)->constrained();
            $table->foreignIdFor(TypingSystem::class)->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('job_lists', function (Blueprint $table) {
            //
        });
    }
};
